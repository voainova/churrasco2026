import { motion } from 'framer-motion';
import { Mic2, ChefHat, Sparkles } from 'lucide-react';

export default function SpeakersSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0805]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[Montserrat] font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Quem Vai Transformar{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              Sua Noite
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Painel Dinâmico - Bloco destacado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 bg-gradient-to-br from-[#d4a574]/10 via-white/5 to-transparent border border-[#d4a574]/30 rounded-2xl overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d4a574]/10 rounded-full blur-3xl" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-[#d4a574]/20 border border-[#d4a574]/30 rounded-full">
                <Sparkles className="w-4 h-4 text-[#f4c984]" />
                <span className="text-[#f4c984] text-xs font-bold uppercase tracking-wider">Atração Principal</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a574]/30 to-[#f4c984]/10 flex items-center justify-center mb-6">
                <Mic2 className="w-8 h-8 text-[#d4a574]" />
              </div>

              {/* Title */}
              <h3 className="font-[Montserrat] font-black text-white text-2xl md:text-3xl mb-5 leading-tight">
                O Palco é de Quem{' '}
                <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
                  Faz Acontecer
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Neste aniversário do Núcleo, o protagonismo é dos empresários. Nosso formato é um{' '}
                <span className="text-[#f4c984] font-semibold">Painel Dinâmico e Talk Show</span>{' '}
                com empresários de sucesso e patrocinadores de destaque da região. Você vai ouvir cases reais, tirar dúvidas na hora e se conectar com quem está no palco e na plateia. É a sala certa, com as pessoas certas.
              </p>
            </div>
          </motion.div>

          {/* Chef Rodrigo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-10 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-[#d4a574]/30 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a574]/20 to-[#f4c984]/10 flex items-center justify-center mb-6">
              <ChefHat className="w-8 h-8 text-[#d4a574]" />
            </div>

            {/* Info */}
            <h3 className="font-[Montserrat] font-bold text-white text-2xl mb-2">
              Chef Rodrigo
            </h3>
            <p className="text-[#d4a574] font-medium text-sm mb-4">
              Experiência Gourmet
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Foco em cortes selecionados e dinâmica de serviço sem filas. O Chef Rodrigo vai proporcionar uma experiência gastronômica premium, com churrasco de alto nível preparado com excelência.
            </p>

            {/* Highlight badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
              <span className="text-[#f4c984] text-sm font-medium">Churrasco Gourmet Premium</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
