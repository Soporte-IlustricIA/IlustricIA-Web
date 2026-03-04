import React from 'react';
import { TubesBackground } from './components/ui/neon-flow';
import { Navbar } from './components/ui/mini-navbar';
import { FeatureSection } from './components/FeatureSection';
import { ManifestoSection } from './components/ManifestoSection';
import { DashboardSection } from './components/DashboardSection';
import { RoiSection } from './components/RoiSection';
import { TestimonialSection } from './components/TestimonialSection';
import { SystemOfRecordSection } from './components/SystemOfRecordSection';
import { CustomerStorySection } from './components/CustomerStorySection';
import { BlogSection } from './components/BlogSection';
import { FooterCtaSection } from './components/FooterCtaSection';
import { Footer } from './components/ui/footer-section';
import { motion } from 'framer-motion';
import { MarqueeDemo } from './components/ui/marquee-demo';

export default function App() {
  return (
    <div className="w-full min-h-screen font-sans bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="h-screen w-full relative">
        <TubesBackground>
          <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2 pointer-events-auto cursor-default"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)] select-none">
                IlustricIA
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                Soluciones tecnológicas y creativas basadas en Inteligencia Artificial para resultados medibles.
              </p>
            </motion.div>
          </div>
        </TubesBackground>
        
        <div className="absolute bottom-12 w-full">
          <MarqueeDemo />
        </div>
      </div>

      {/* Feature Section */}
      <FeatureSection />

      {/* Manifesto Section */}
      <div id="manifesto">
        <ManifestoSection />
      </div>

      {/* Dashboard Section */}
      <div id="dashboard">
        <DashboardSection />
      </div>

      {/* ROI Section */}
      <div id="roi">
        <RoiSection />
      </div>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* System of Record Section */}
      <SystemOfRecordSection />

      {/* Customer Story Section */}
      <CustomerStorySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer CTA Section */}
      <FooterCtaSection />

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
