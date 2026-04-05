import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

export const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);
  const scale = useTransform(smoothProgress, [0, 1], [1.05, 1.1]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const hueRotate = useTransform(smoothProgress, [0, 1], ["hue-rotate(0deg)", "hue-rotate(15deg)"]);
  const y1 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ["#f0f9ff", "#fcfdfe", "#f0f9ff"]);

  useMotionValueEvent(smoothScrollY, "change", () => {});
  useMotionValueEvent(smoothProgress, "change", () => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Particles/Nodes
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = 100;
    let mouseX = -1000;
    let mouseY = -1000;

    const colors = ['#29ABE2', '#0071BC', '#00AEEF', '#3FA9F5', '#1B75BC'];

    // Data pulses
    const pulses: { x: number; y: number; length: number; speed: number; vertical: boolean; opacity: number }[] = [];

    // Click ripples
    const ripples: { x: number; y: number; r: number; maxR: number; opacity: number }[] = [];

    // Corner beams
    const beams: { x: number; y: number; tx: number; ty: number; progress: number; speed: number; opacity: number }[] = [];

    // Floating Tech Shapes
    const shapes: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      size: number; 
      rotation: number; 
      vr: number; 
      type: 'hex' | 'tri' | 'square' | 'circle' | 'cross' | 'diamond' | 'dashed-circle' | 'tech-bit' | 'bracket' | 'binary' | 'orbit'; 
      opacity: number;
      depth: number;
      text?: string;
      orbitRadius?: number;
      orbitSpeed?: number;
      orbitAngle?: number;
    }[] = [];
    const shapeCount = 80;

    for (let i = 0; i < shapeCount; i++) {
      const depth = Math.random() * 0.5 + 0.5;
      const types: ('hex' | 'tri' | 'square' | 'circle' | 'cross' | 'diamond' | 'dashed-circle' | 'tech-bit' | 'bracket' | 'binary' | 'orbit')[] = 
        ['hex', 'tri', 'square', 'circle', 'cross', 'diamond', 'dashed-circle', 'tech-bit', 'bracket', 'binary', 'orbit'];
      
      const type = types[Math.floor(Math.random() * types.length)];
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4 * depth,
        vy: (Math.random() - 0.5) * 0.4 * depth,
        size: (Math.random() * 25 + 8) * depth,
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        type,
        opacity: (Math.random() * 0.25 + 0.1) * depth,
        depth,
        text: type === 'binary' ? (Math.random() > 0.5 ? '0' : '1') : undefined,
        orbitRadius: type === 'orbit' ? Math.random() * 50 + 20 : undefined,
        orbitSpeed: type === 'orbit' ? (Math.random() - 0.5) * 0.05 : undefined,
        orbitAngle: type === 'orbit' ? Math.random() * Math.PI * 2 : undefined
      });
    }

    // Falling Data Streams
    const streams: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    const streamCount = 15;
    for (let i = 0; i < streamCount; i++) {
      streams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 4 + 2,
        length: Math.random() * 150 + 50,
        opacity: Math.random() * 0.15 + 0.05
      });
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Spawn a beam occasionally on move
      if (Math.random() < 0.1) {
        const side = Math.floor(Math.random() * 4);
        let bx = 0, by = 0;
        if (side === 0) { bx = Math.random() * width; by = 0; }
        else if (side === 1) { bx = width; by = Math.random() * height; }
        else if (side === 2) { bx = Math.random() * width; by = height; }
        else { bx = 0; by = Math.random() * height; }

        beams.push({
          x: bx,
          y: by,
          tx: mouseX,
          ty: mouseY,
          progress: 0,
          speed: 0.02 + Math.random() * 0.03,
          opacity: 0.4
        });
      }
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        r: 0,
        maxR: 200,
        opacity: 0.5
      });

      // Spawn multiple beams on click
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        beams.push({
          x: e.clientX,
          y: e.clientY,
          tx: e.clientX + Math.cos(angle) * 300,
          ty: e.clientY + Math.sin(angle) * 300,
          progress: 0,
          speed: 0.05,
          opacity: 0.6
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const scrollOffset = window.scrollY;
      const progress = smoothProgress.get();

      const wrap = (val: number, max: number) => {
        const res = val % max;
        return res < 0 ? res + max : res;
      };
      
      // Draw Falling Data Streams
      for (let i = 0; i < streams.length; i++) {
        const s = streams[i];
        const wrappedY = wrap(s.y - scrollOffset * 0.5, height + s.length) - s.length;
        
        ctx.strokeStyle = `rgba(41, 171, 226, ${s.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.x, wrappedY);
        ctx.lineTo(s.x, wrappedY + s.length);
        ctx.stroke();

        s.y += s.speed;
        if (s.y > height) s.y = -s.length;
      }

      // Draw Floating Tech Shapes
      ctx.lineWidth = 1;
      for (let i = 0; i < shapes.length; i++) {
        const s = shapes[i];
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.vr;
        if (s.orbitAngle !== undefined && s.orbitSpeed !== undefined && s.orbitRadius !== undefined) {
          s.orbitAngle += s.orbitSpeed;
        }

        if (s.x < -100) s.x = width + 100;
        if (s.x > width + 100) s.x = -100;
        if (s.y < -100) s.y = height + 100;
        if (s.y > height + 100) s.y = -100;

        const wrappedY = wrap(s.y - scrollOffset * (s.depth * 0.8), height + 200) - 100;

        ctx.strokeStyle = `rgba(41, 171, 226, ${s.opacity})`;
        ctx.fillStyle = `rgba(41, 171, 226, ${s.opacity})`;
        ctx.save();
        ctx.translate(s.x, wrappedY);
        ctx.rotate(s.rotation + progress * Math.PI * 2);
        ctx.beginPath();
        
        if (s.type === 'hex') {
          for (let j = 0; j < 6; j++) {
            const angle = (j / 6) * Math.PI * 2;
            const x = Math.cos(angle) * s.size;
            const y = Math.sin(angle) * s.size;
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else if (s.type === 'tri') {
          for (let j = 0; j < 3; j++) {
            const angle = (j / 3) * Math.PI * 2;
            const x = Math.cos(angle) * s.size;
            const y = Math.sin(angle) * s.size;
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else if (s.type === 'square') {
          ctx.rect(-s.size/2, -s.size/2, s.size, s.size);
        } else if (s.type === 'circle') {
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
        } else if (s.type === 'cross') {
          ctx.moveTo(-s.size/2, 0); ctx.lineTo(s.size/2, 0);
          ctx.moveTo(0, -s.size/2); ctx.lineTo(0, s.size/2);
        } else if (s.type === 'diamond') {
          ctx.moveTo(0, -s.size);
          ctx.lineTo(s.size/1.5, 0);
          ctx.lineTo(0, s.size);
          ctx.lineTo(-s.size/1.5, 0);
          ctx.closePath();
        } else if (s.type === 'dashed-circle') {
          ctx.setLineDash([5, 5]);
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
        } else if (s.type === 'tech-bit') {
          ctx.moveTo(-s.size/2, -s.size/2);
          ctx.lineTo(s.size/2, -s.size/2);
          ctx.lineTo(s.size/2, s.size/2);
        } else if (s.type === 'bracket') {
          ctx.moveTo(s.size/2, -s.size/2);
          ctx.lineTo(-s.size/2, -s.size/2);
          ctx.lineTo(-s.size/2, s.size/2);
          ctx.lineTo(s.size/2, s.size/2);
        } else if (s.type === 'binary' && s.text) {
          ctx.font = `${s.size}px monospace`;
          ctx.fillText(s.text, 0, 0);
        } else if (s.type === 'orbit' && s.orbitAngle !== undefined && s.orbitRadius !== undefined) {
          ctx.arc(0, 0, s.orbitRadius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          const ox = Math.cos(s.orbitAngle) * s.orbitRadius;
          const oy = Math.sin(s.orbitAngle) * s.orbitRadius;
          ctx.arc(ox, oy, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        
        if (s.type !== 'binary' && s.type !== 'orbit') {
          ctx.stroke();
        }
        
        ctx.setLineDash([]);
        
        // Inner tech detail
        if (s.type !== 'binary' && s.type !== 'orbit') {
          ctx.beginPath();
          if (s.type === 'hex' || s.type === 'circle' || s.type === 'dashed-circle') {
            ctx.arc(0, 0, 2, 0, Math.PI * 2);
          } else if (s.type === 'tri' || s.type === 'diamond' || s.type === 'tech-bit' || s.type === 'bracket') {
            ctx.moveTo(-3, 0); ctx.lineTo(3, 0);
          }
          ctx.stroke();
        }
        
        ctx.restore();
      }

      // Draw beams
      ctx.lineWidth = 1;
      for (let i = beams.length - 1; i >= 0; i--) {
        const b = beams[i];
        const curX = b.x + (b.tx - b.x) * b.progress;
        const curY = b.y + (b.ty - b.y) * b.progress;
        const prevX = b.x + (b.tx - b.x) * Math.max(0, b.progress - 0.1);
        const prevY = b.y + (b.ty - b.y) * Math.max(0, b.progress - 0.1);

        ctx.strokeStyle = `rgba(41, 171, 226, ${b.opacity * (1 - b.progress)})`;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(curX, curY);
        ctx.stroke();

        b.progress += b.speed;
        if (b.progress >= 1) {
          beams.splice(i, 1);
        }
      }

      // Draw pulses
      if (Math.random() < 0.05) {
        const vertical = Math.random() > 0.5;
        pulses.push({
          x: vertical ? Math.random() * width : -100,
          y: vertical ? -100 : Math.random() * height,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 10 + 5,
          vertical,
          opacity: Math.random() * 0.3 + 0.1
        });
      }

      ctx.lineWidth = 1;
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        ctx.strokeStyle = `rgba(41, 171, 226, ${p.opacity})`;
        ctx.beginPath();
        if (p.vertical) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length);
          p.y += p.speed;
        } else {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.length, p.y);
          p.x += p.speed;
        }
        ctx.stroke();

        if (p.x > width + 100 || p.y > height + 100) {
          pulses.splice(i, 1);
        }
      }

      // Draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        ctx.strokeStyle = `rgba(41, 171, 226, ${r.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
        
        r.r += 4;
        r.opacity -= 0.01;
        if (r.opacity <= 0) {
          ripples.splice(i, 1);
        }
      }

      // Draw connections between particles (Plexus Effect)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          
          const p1y = wrap(p1.y - scrollOffset * 0.3, height + 100) - 50;
          const p2y = wrap(p2.y - scrollOffset * 0.3, height + 100) - 50;

          const dx = p1.x - p2.x;
          const dy = p1y - p2y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.25;
            ctx.strokeStyle = `rgba(41, 171, 226, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1y);
            ctx.lineTo(p2.x, p2y);
            ctx.stroke();

            // Triangle fills (Plexus style)
            for (let k = j + 1; k < particles.length; k++) {
              const p3 = particles[k];
              const p3y = wrap(p3.y - scrollOffset * 0.3, height + 100) - 50;
              
              const dx2 = p1.x - p3.x;
              const dy2 = p1y - p3y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              const dx3 = p2.x - p3.x;
              const dy3 = p2y - p3y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

              if (dist2 < 150 && dist3 < 150) {
                const triOpacity = (1 - (dist + dist2 + dist3) / 450) * 0.08;
                ctx.fillStyle = `rgba(41, 171, 226, ${triOpacity})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1y);
                ctx.lineTo(p2.x, p2y);
                ctx.lineTo(p3.x, p3y);
                ctx.fill();
              }
            }
          }
        }

        // Interactive: Connect to mouse
        const p1y = wrap(p1.y - scrollOffset * 0.3, height + 100) - 50;
        const mdx = p1.x - mouseX;
        const mdy = p1y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 250) {
          ctx.strokeStyle = `rgba(41, 171, 226, ${0.4 * (1 - mDist / 250)})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw particle
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.color;
        ctx.beginPath();
        ctx.arc(p1.x, p1y, p1.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-white dark:bg-[#030712] transition-colors duration-500"
      style={{ rotate, scale }}
    >
      {/* Primary Gradient Background - Light Blue Tech Theme */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] dark:from-[#030712] dark:via-[#0c1a33] dark:to-[#030712]" 
        style={{ opacity, filter: hueRotate, backgroundColor: bgColor }}
      />
      
      {/* Secondary Glows for depth - Using Primary Blue */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#29ABE2]/10 dark:bg-[#29ABE2]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#29ABE2]/10 dark:bg-[#29ABE2]/20 rounded-full blur-[150px]" />

      {/* Primary Grid - More visible in dark, subtle in light */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #29ABE2 1px, transparent 1px),
            linear-gradient(to bottom, #29ABE2 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          y: y1,
          rotate: rotate
        }} 
      />

      {/* Secondary Micro Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #29ABE2 1px, transparent 1px),
            linear-gradient(to bottom, #29ABE2 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          y: y2
        }} 
      />

      {/* Animated Canvas Nodes */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-80 dark:opacity-90"
      />

      {/* Radial Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.2)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.9)_100%)]" />

      {/* Subtle Glows */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#29ABE2]/10 dark:bg-[#29ABE2]/15 rounded-full blur-[120px]"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#29ABE2]/10 dark:bg-[#29ABE2]/15 rounded-full blur-[120px]"
        style={{ y: y2 }}
      />
    </motion.div>
  );
};
