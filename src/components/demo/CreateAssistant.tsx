import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const N8N_WEBHOOK_URL = "https://n8n.srv1023108.hstgr.cloud/webhook/create-eleven-agent";

export function CreateAssistant() {
  const [formData, setFormData] = useState({
    businessName: '',
    sector: '',
    businessUrl: '',
    language: 'es',
    instructions: 'Eres un asistente claro y profesional. Responde de forma breve, amable y orientada a resolver reservas y preguntas frecuentes.'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [generatedAgentId, setGeneratedAgentId] = useState<string | null>(null);

  const toSlug = (value: string) => {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    setGeneratedAgentId(null);

    const sectorTag = toSlug(formData.sector);
    const languageTag = toSlug(formData.language || "es");
    
    const systemPromptParts = [
      `Sector: ${formData.sector}.`,
      `Idioma de atencion: ${formData.language}.`,
      `Informacion adicional: ${formData.instructions}`
    ];
    if (formData.businessUrl) {
      systemPromptParts.push(`Sitio web del negocio: ${formData.businessUrl}.`);
    }

    const payload = {
      agent_name: formData.businessName,
      system_prompt: systemPromptParts.join(" "),
      first_message: `Hola, soy el asistente de ${formData.businessName}. ¿En qué puedo ayudarte hoy?`,
      language: formData.language || "es",
      tags: ["landing-form", sectorTag || "general", languageTag || "es"].filter(Boolean),
      metadata: {
        source: "landing-openclaw",
        business_url: formData.businessUrl || "",
        sector: formData.sector,
        language: formData.language
      }
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result.ok === false) {
        throw new Error(result.error || "Error al crear el asistente.");
      }

      // Extract agent_id from response or snippet
      let agentId = result.agent_id || result.agentId;
      if (!agentId && result.widget_snippet) {
        const match = result.widget_snippet.match(/agent-id=["']([^"']+)["']/);
        agentId = match ? match[1] : null;
      }

      if (agentId) {
        setGeneratedAgentId(agentId);
        setSuccessMsg("Asistente generado correctamente.");
      } else {
        throw new Error("No se recibió un agent_id válido.");
      }
    } catch (error: any) {
      console.error("Error creating assistant:", error);
      setErrorMsg(error.message || "No se pudo crear el asistente. Revisa la conexión y el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-transparent scroll-mt-24" id="crea-tu-asistente">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">Demo en vivo</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface dark:text-white">Crea un asistente con OpenClaw y obtén su widget</h2>
          <p className="text-on-surface-variant dark:text-neutral-400">Completa el formulario para generar tu asistente. Mientras se crea verás un estado de espera y, al finalizar, se cargará automáticamente la demo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form 
            onSubmit={handleSubmit}
            className="bg-surface-container-lowest dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-outline-variant/20 dark:border-white/10 shadow-sm space-y-5"
            aria-live="polite"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="businessName">Negocio / marca</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                placeholder="Nombre del negocio" 
                required 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="sector">Sector</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="sector"
                value={formData.sector}
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
                placeholder="Ej. Restaurante, clínica dental, peluquería..." 
                required 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="businessUrl">URL del negocio (opcional)</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="businessUrl"
                value={formData.businessUrl}
                onChange={(e) => setFormData({...formData, businessUrl: e.target.value})}
                placeholder="https://tumarca.com" 
                type="url"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="language">Idioma</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="language"
                value={formData.language}
                onChange={(e) => setFormData({...formData, language: e.target.value})}
                placeholder="es" 
                type="text" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="instructions">Información adicional</label>
              <textarea 
                className="w-full min-h-[140px] rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="instructions"
                value={formData.instructions}
                onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                placeholder="Añade detalles para configurar el asistente..." 
                required
              />
            </div>
            
            <button 
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-bold text-sm rounded-lg hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed" 
              type="submit"
            >
              {isLoading ? "Creando asistente..." : "Crear asistente"}
            </button>

            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-on-surface-variant dark:text-neutral-400">
                <Loader2 className="animate-spin" size={16} />
                <span>Generando asistente, espera unos segundos...</span>
              </div>
            )}

            {errorMsg && (
              <p className="text-sm text-error">{errorMsg}</p>
            )}

            {successMsg && (
              <p className="text-sm text-primary">{successMsg}</p>
            )}
          </form>

          <div className="flex flex-col items-center justify-center bg-surface-container-low dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-outline-variant/10 dark:border-white/10 p-8 min-h-[500px]">
            <p className="text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-6">Resultado del asistente</p>
            {generatedAgentId ? (
              <div className="w-full flex justify-center">
                {/* @ts-ignore */}
                <elevenlabs-convai agent-id={generatedAgentId} />
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-surface-container-high dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto text-outline dark:text-neutral-400">
                  <Loader2 size={32} className={isLoading ? "animate-spin" : ""} />
                </div>
                <h4 className="text-lg font-bold text-on-surface dark:text-white mb-2">Esperando configuración</h4>
                <p className="text-sm text-on-surface-variant dark:text-neutral-400 max-w-xs">
                  {isLoading ? "Estamos configurando tu asistente personalizado..." : "Completa el formulario para ver tu asistente aquí."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
