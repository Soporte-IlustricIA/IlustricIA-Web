import React from 'react';

export function FooterCtaSection() {
  return (
    <section className="w-full bg-black py-32 px-4 md:px-8 border-t border-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-12 leading-[1.1]">
            Convierte el feedback de clientes en innovación de productos
          </h2>
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
              Prueba IlustricIA gratis
            </button>
            <button className="px-6 py-3 bg-neutral-900 text-white border border-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">
              Contactar ventas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
