import React from 'react';
import { TubesBackground } from './components/ui/neon-flow';
import { Header } from './components/ui/header-01';
import { FeatureSection } from './components/FeatureSection';
import { DashboardSection } from './components/DashboardSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FaqSection } from './components/FaqSection';
import { SystemOfRecordSection } from './components/SystemOfRecordSection';
import { CustomerStorySection } from './components/CustomerStorySection';
import { FooterCtaSection } from './components/FooterCtaSection';
import { AboutUsSection } from './components/AboutUsSection';
import { Footer } from './components/ui/footer-section';
import { motion } from 'framer-motion';
import { MarqueeDemo } from './components/ui/marquee-demo';
import { TechBackground } from './components/ui/TechBackground';

import { useTheme } from './components/ThemeProvider';

export default function App() {
  const { theme } = useTheme();
  
  return (
    <div className="w-full min-h-screen font-sans text-black dark:text-white transition-colors duration-300 relative">
        <TechBackground />
        <Header />
        
        {/* Hero Section */}
      <motion.div 
        className="h-screen w-full relative overflow-hidden bg-transparent transition-colors duration-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 z-10 opacity-[0.1] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <TubesBackground key={theme}>
          <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center px-4 relative z-20">
            <div className="space-y-2 pointer-events-auto cursor-default">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_20px_rgba(0,0,0,1)] select-none">
                Ilustric<span style={{ color: '#29ABE2', textShadow: '0 0 10px rgba(41, 171, 226, 0.8), 0 0 25px rgba(41, 171, 226, 0.5), 0 0 40px rgba(41, 171, 226, 0.3)' }}>IA</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                Soluciones digitales y funcionales para tu ecosistema digital.
              </p>
            </div>
          </div>
        </TubesBackground>
        
        {/* Gradient Fade to next section - Very subtle in white version */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-[#030712] via-white/20 dark:via-[#030712]/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px] dark:backdrop-blur-[2px]" />

        <div className="absolute bottom-16 w-full z-30">
          <MarqueeDemo />
        </div>
      </motion.div>

      {/* Dashboard Section (Nuestros Servicios) */}
      <motion.div 
        id="dashboard"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DashboardSection />
      </motion.div>

      {/* System of Record Section (Sistema central) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SystemOfRecordSection />
      </motion.div>

      {/* Feature Section (De la promesa a la practica) */}
      <div id="recursos">
        <FeatureSection />
      </div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TestimonialSection />
      </motion.div>

      {/* About Us Section (Quienes Somos) */}
      <div id="about">
        <AboutUsSection />
      </div>

      {/* Customer Story Section (Innovacion) */}
      <motion.div
        className="py-24 md:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CustomerStorySection />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        id="faqs"
        className="py-24 md:py-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <FaqSection />
      </motion.div>

      {/* Footer CTA Section ("¿Iniciamos la transformación de tu operativa?") */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <FooterCtaSection />
      </motion.div>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
