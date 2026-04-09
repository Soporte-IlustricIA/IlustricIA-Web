import { useCallback, useState } from "react"
import { useConversation } from "@elevenlabs/react"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2Icon, PhoneIcon, PhoneOffIcon } from "lucide-react"

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID as string

type AgentState = "disconnected" | "connecting" | "connected" | "disconnecting" | null

export default function ElevenLabsDemo() {
  const [agentState, setAgentState] = useState<AgentState>("disconnected")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => {
      console.log("Disconnected")
      setAgentState("disconnected")
    },
    onError: (error) => {
      console.error("Error:", error)
      setAgentState("disconnected")
    },
  })

  const startConversation = useCallback(async () => {
    try {
      setErrorMessage(null)
      await navigator.mediaDevices.getUserMedia({ audio: true })
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
        onStatusChange: (status) => setAgentState(status.status as AgentState),
      })
    } catch (error) {
      console.error("Error starting conversation:", error)
      setAgentState("disconnected")
      if (error instanceof DOMException && error.name === "NotAllowedError") {
        setErrorMessage("Por favor, permite el acceso al micrófono en tu navegador.")
      }
    }
  }, [conversation])

  const handleCall = useCallback(() => {
    if (agentState === "disconnected" || agentState === null) {
      setAgentState("connecting")
      startConversation()
    } else if (agentState === "connected") {
      conversation.endSession()
      setAgentState("disconnected")
    }
  }, [agentState, conversation, startConversation])

  const isCallActive = agentState === "connected"
  const isTransitioning = agentState === "connecting" || agentState === "disconnecting"

  const inputVol = Math.min(1.0, Math.pow(conversation.getInputVolume?.() ?? 0, 0.5) * 2.5)
  const outputVol = Math.min(1.0, Math.pow(conversation.getOutputVolume?.() ?? 0, 0.5) * 2.5)
  const orbScale = 1 + (isCallActive ? (inputVol + outputVol) * 0.15 : 0)

  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">

        <motion.div
          animate={{ scale: orbScale }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative size-32"
        >
          <div
            className={`h-full w-full rounded-full transition-all duration-500 ${
              isCallActive
                ? "bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_0_40px_rgba(139,92,246,0.6)]"
                : isTransitioning
                ? "bg-gradient-to-br from-violet-400 to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-pulse"
                : "bg-gradient-to-br from-gray-700 to-gray-800 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold text-white">Demo Restaurante</h2>
          <AnimatePresence mode="wait">
            {errorMessage ? (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-center text-sm text-red-400"
              >
                {errorMessage}
              </motion.p>
            ) : agentState === "disconnected" || agentState === null ? (
              <motion.p
                key="disconnected"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-sm text-gray-400"
              >
                Toca para iniciar la demo por voz
              </motion.p>
            ) : (
              <motion.div
                key="status"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2"
              >
                <div
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    isCallActive ? "bg-green-400" : "animate-pulse bg-violet-400"
                  }`}
                />
                <span className="text-sm capitalize text-gray-300">
                  {isTransitioning ? agentState + "..." : (
                    <span className="text-green-400">Conectado</span>
                  )}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={handleCall}
          disabled={isTransitioning}
          className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 ${
            isCallActive
              ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:bg-red-600"
              : "bg-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-violet-700"
          }`}
        >
          <AnimatePresence mode="wait">
            {isTransitioning ? (
              <motion.div
                key="loading"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2Icon className="h-6 w-6 text-white" />
              </motion.div>
            ) : isCallActive ? (
              <motion.div
                key="end"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <PhoneOffIcon className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <PhoneIcon className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  )
}