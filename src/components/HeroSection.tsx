import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const CTA_LINK = 'https://pensanoevento.com.br/teste';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with animated overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
          poster="/assets/Arte_feed.jpeg"
        >
          <source src="/assets/video_churras.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0805]" />
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4a574] rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#f4c984] rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#d4a574] rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#f4c984] rounded-full animate-pulse delay-500" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full animate-pulse-gold"
        >
          <span className="text-lg">🔥</span>
          <span className="text-[#f4c984] font-[Montserrat] font-bold text-sm md:text-base">
            Apenas 80 Vagas Disponíveis
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-[Montserrat] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
        >
          Conecte-se, Aprenda e{' '}
          <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
            Venda Mais
          </span>{' '}
          no Evento de Aniversário do Núcleo de Inovação
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Uma noite exclusiva com palestra estratégica de alto nível, networking qualificado e um churrasco gourmet assinado pelo Chef Rodrigo.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#d4a574]" />
            <span className="text-white text-sm md:text-base font-medium">05/Nov/2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#d4a574]" />
            <span className="text-white text-sm md:text-base font-medium">19h00</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#d4a574]" />
            <span className="text-white text-sm md:text-base font-medium">AEMFLO/CDL-SJ</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#d4a574] to-[#f4c984] text-black font-[Montserrat] font-bold text-base md:text-lg rounded-full shadow-lg shadow-[#d4a574]/30 hover:shadow-xl hover:shadow-[#d4a574]/40 transition-all duration-300"
        >
          Quero garantir Já
          <span className="text-xl">→</span>
        </motion.a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0805] to-transparent" />
    </section>
  );
}
