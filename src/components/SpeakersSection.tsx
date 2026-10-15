import { motion } from 'framer-motion';
import { Mic, ChefHat } from 'lucide-react';

const speakers = [
  {
    name: 'Fernando Atalaia',
    role: 'Estrategista de Ecossistema Empresarial',
    icon: Mic,
    description: 'Foco em vendas e conexões estratégicas. Fernando vai compartilhar insights poderosos sobre como construir um ecossistema empresarial que gera resultados reais e sustentáveis para o seu negócio.',
    highlight: 'Palestra: Ecossistema Empresarial',
  },
  {
    name: 'Chef Rodrigo',
    role: 'Experiência Gourmet',
    icon: ChefHat,
    description: 'Foco em cortes selecionados e dinâmica de serviço sem filas. O Chef Rodrigo vai proporcionar uma experiência gastronômica premium, com churrasco de alto nível preparado com excelência.',
    highlight: 'Churrasco Gourmet Premium',
  },
];

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

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-[#d4a574]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a574]/20 to-[#f4c984]/10 flex items-center justify-center mb-6">
                <speaker.icon className="w-8 h-8 text-[#d4a574]" />
              </div>

              {/* Info */}
              <h3 className="font-[Montserrat] font-bold text-white text-2xl mb-2">
                {speaker.name}
              </h3>
              <p className="text-[#d4a574] font-medium text-sm mb-4">
                {speaker.role}
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                {speaker.description}
              </p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
                <span className="text-[#f4c984] text-sm font-medium">{speaker.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
