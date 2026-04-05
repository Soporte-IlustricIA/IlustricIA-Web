'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/src/lib/utils'

interface NeonRGBTextEffectProps {
    text: string;
    className?: string;
    fontSize?: number;
}

export function NeonRGBTextEffect({ text, className, fontSize = 140 }: NeonRGBTextEffectProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const gl = canvas.getContext('webgl', { alpha: true })
        if (!gl) return

        // Vertex Shader
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
        gl.shaderSource(vertexShader, `
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = vec2(position.x * 0.5 + 0.5, 1.0 - (position.y * 0.5 + 0.5));
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `)
        gl.compileShader(vertexShader)

        // Fragment Shader
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
        gl.shaderSource(fragmentShader, `
            precision mediump float;
            uniform sampler2D uTexture;
            uniform vec2 uOffset;
            uniform vec3 uColor;
            varying vec2 vUv;

            void main() {
                vec2 distortedUv = vUv + vec2(uOffset.x, -uOffset.y);
                vec4 texel = texture2D(uTexture, distortedUv);
                // Boost the color and use alpha from texture
                gl_FragColor = vec4(uColor * texel.a * 2.5, texel.a);
            }
        `)
        gl.compileShader(fragmentShader)

        // Create Program
        const program = gl.createProgram()!
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)
        gl.useProgram(program)

        // Create Buffer
        const vertices = new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1
        ])
        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

        // Set Position Attribute
        const positionLocation = gl.getAttribLocation(program, 'position')
        gl.enableVertexAttribArray(positionLocation)
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

        // Create Text Texture
        const textCanvas = document.createElement('canvas')
        const textCtx = textCanvas.getContext('2d')!
        
        const updateTexture = () => {
            const rect = container.getBoundingClientRect()
            // High DPI support
            textCanvas.width = rect.width * 2
            textCanvas.height = rect.height * 2
            
            textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height)
            textCtx.fillStyle = '#ffffff'
            // Use a bold sans-serif font to match the site's aesthetic
            // Calculate font size based on container height to match surrounding text
            const calculatedFontSize = textCanvas.height * 0.8
            textCtx.font = `bold ${calculatedFontSize}px Inter, system-ui, sans-serif`
            textCtx.textAlign = 'center'
            textCtx.textBaseline = 'middle'
            textCtx.fillText(text, textCanvas.width / 2, textCanvas.height / 2)

            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        }

        // Create Texture
        const texture = gl.createTexture()
        
        // Get Uniform Locations
        const textureLocation = gl.getUniformLocation(program, 'uTexture')
        const offsetLocation = gl.getUniformLocation(program, 'uOffset')
        const colorLocation = gl.getUniformLocation(program, 'uColor')

        // Enable Blending
        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE)

        const render = () => {
            gl.clearColor(0, 0, 0, 0)
            gl.clear(gl.COLOR_BUFFER_BIT)

            const offsetAmount = 0.006
            const channels = [
                { color: [1, 0, 0.2], offset: [offsetAmount, 0] }, // Reddish
                { color: [0.1, 1, 0.4], offset: [0, 0] },         // Greenish
                { color: [0.2, 0.4, 1], offset: [-offsetAmount, 0] } // Bluish
            ]

            channels.forEach(({ color, offset }) => {
                gl.uniform2fv(offsetLocation, offset)
                gl.uniform3fv(colorLocation, color)
                gl.uniform1i(textureLocation, 0)
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
            })
        };

        const setCanvasSize = () => {
            const rect = container.getBoundingClientRect()
            canvas.width = rect.width * window.devicePixelRatio
            canvas.height = rect.height * window.devicePixelRatio
            gl.viewport(0, 0, canvas.width, canvas.height)
            
            updateTexture()
            render()
        }

        setCanvasSize()
        window.addEventListener('resize', setCanvasSize)

        return () => {
            window.removeEventListener('resize', setCanvasSize)
            gl.deleteProgram(program)
            gl.deleteShader(vertexShader)
            gl.deleteShader(fragmentShader)
            gl.deleteBuffer(buffer)
            gl.deleteTexture(texture)
        }
    }, [text, fontSize])

    return (
        <div ref={containerRef} className={cn("relative inline-block align-middle", className)}>
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    )
}
