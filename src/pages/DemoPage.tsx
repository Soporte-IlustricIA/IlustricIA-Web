import React, { useEffect } from 'react';
import { Header } from '../components/ui/header-01';
import { TechBackground } from '../components/ui/TechBackground';
import { DemoHero } from '../components/demo/DemoHero';
import { HowItWorks } from '../components/demo/HowItWorks';
import { DemoCatalog } from '../components/demo/DemoCatalog';
import { CreateAssistant } from '../components/demo/CreateAssistant';
import { Footer } from '../components/ui/footer-section';

export function DemoPage() {
  useEffect(() => {
    // Inject ElevenLabs script
    const scriptId = 'elevenlabs-convai-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen font-sans text-black dark:text-white transition-colors duration-300 relative">
      <TechBackground />
      <Header />
      <main>
        <DemoHero />
        <HowItWorks />
        <DemoCatalog />
        <CreateAssistant />
      </main>
      <Footer />
    </div>
  );
}
