import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const N8N_WEBHOOK_URL = "https://n8n.srv1023108.hstgr.cloud/webhook/create-eleven-agent";

export function CreateAssistant() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: '',
    sector: '',
    businessUrl: '',
    language: language as string,
    instructions: t.demo.create.defaultInstructions
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
      first_message: t.demo.create.firstMessage.replace('{name}', formData.businessName),
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
        throw new Error(result.error || t.demo.create.errorCreate);
      }

      // Extract agent_id from response or snippet
      let agentId = result.agent_id || result.agentId;
      if (!agentId && result.widget_snippet) {
        const match = result.widget_snippet.match(/agent-id=["']([^"']+)["']/);
        agentId = match ? match[1] : null;
      }

      if (agentId) {
        setGeneratedAgentId(agentId);
        setSuccessMsg(t.demo.create.success);
      } else {
        throw new Error(t.demo.create.errorNoAgent);
      }
    } catch (error: any) {
      console.error("Error creating assistant:", error);
      setErrorMsg(error.message || t.demo.create.errorGeneric);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-transparent scroll-mt-24" id="crea-tu-asistente">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">{t.demo.create.badge}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface dark:text-white">{t.demo.create.title}</h2>
          <p className="text-on-surface-variant dark:text-neutral-400">{t.demo.create.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form 
            onSubmit={handleSubmit}
            className="bg-surface-container-lowest dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-outline-variant/20 dark:border-white/10 shadow-sm space-y-5"
            aria-live="polite"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="businessName">{t.demo.create.labels.business}</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                placeholder={t.demo.create.placeholders.business}
                required 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="sector">{t.demo.create.labels.sector}</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="sector"
                value={formData.sector}
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
                placeholder={t.demo.create.placeholders.sector}
                required 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="businessUrl">{t.demo.create.labels.url}</label>
              <input 
                className="w-full rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="businessUrl"
                value={formData.businessUrl}
                onChange={(e) => setFormData({...formData, businessUrl: e.target.value})}
                placeholder={t.demo.create.placeholders.url}
                type="url"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="language">{t.demo.create.labels.language}</label>
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
              <label className="block text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-2" htmlFor="instructions">{t.demo.create.labels.instructions}</label>
              <textarea 
                className="w-full min-h-[140px] rounded-lg border-outline-variant/40 dark:border-white/10 bg-surface-container-low dark:bg-neutral-800 px-4 py-3 text-sm focus:border-primary focus:ring-primary text-on-surface dark:text-white" 
                id="instructions"
                value={formData.instructions}
                onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                placeholder={t.demo.create.placeholders.instructions}
                required
              />
            </div>
            
            <button 
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-bold text-sm rounded-lg hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed" 
              type="submit"
            >
              {isLoading ? t.demo.create.submitting : t.demo.create.submit}
            </button>

            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-on-surface-variant dark:text-neutral-400">
                <Loader2 className="animate-spin" size={16} />
                <span>{t.demo.create.generating}</span>
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
            <p className="text-xs uppercase tracking-widest text-outline dark:text-neutral-400 mb-6">{t.demo.create.resultLabel}</p>
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
                <h4 className="text-lg font-bold text-on-surface dark:text-white mb-2">{t.demo.create.waitingTitle}</h4>
                <p className="text-sm text-on-surface-variant dark:text-neutral-400 max-w-xs">
                  {isLoading ? t.demo.create.waitingConfiguring : t.demo.create.waitingEmpty}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
