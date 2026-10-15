import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const CTA_LINK = 'https://pensanoevento.com.br/teste';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-black/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logos */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/Logo Núcleo Inovação 2025 melhorada.png"
              alt="Logo Núcleo Inovação 2025"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <img
              src="/assets/logo completa colorida Inovação e Negócios.jpeg"
              alt="Logo Inovação e Negócios"
              loading="eager"
              decoding="async"
              className="hidden md:block h-10 md:h-12 w-auto object-contain rounded"
            />
          </div>

          {/* Desktop CTA */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#d4a574] to-[#f4c984] text-black font-[Montserrat] font-bold text-sm rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#d4a574]/30 transition-all duration-300"
          >
            Garantir Ingresso
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#d4a574] to-[#f4c984] text-black font-[Montserrat] font-bold text-sm rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Garantir Ingresso
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
