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
      <motion.div 
        className="h-screen w-full relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TubesBackground>
          <div className="flex flex-col items-center justify-center w-full h-full gap-6 text-center px-4">
            <div className="space-y-2 pointer-events-auto cursor-default">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)] select-none">
                Ilustric<span style={{ color: '#29ABE2', textShadow: '0 0 10px rgba(41, 171, 226, 0.8), 0 0 25px rgba(41, 171, 226, 0.5), 0 0 40px rgba(41, 171, 226, 0.3)' }}>IA</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                Soluciones digitales y funcionales para tu ecosistema digital.
              </p>
            </div>
          </div>
        </TubesBackground>
        
        <div className="absolute bottom-12 w-full">
          <MarqueeDemo />
        </div>
      </motion.div>

      {/* Feature Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <FeatureSection />
      </motion.div>

      {/* Manifesto Section */}
      <motion.div 
        id="manifesto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ManifestoSection />
      </motion.div>

      {/* Dashboard Section */}
      <motion.div 
        id="dashboard"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DashboardSection />
      </motion.div>

      {/* ROI Section */}
      <motion.div 
        id="roi"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <RoiSection />
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TestimonialSection />
      </motion.div>

      {/* System of Record Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SystemOfRecordSection />
      </motion.div>

      {/* Customer Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CustomerStorySection />
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BlogSection />
      </motion.div>

      {/* Footer CTA Section */}
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
