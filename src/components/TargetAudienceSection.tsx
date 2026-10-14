import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const audienceItems = [
  'Você é empreendedor/gestor e precisa expandir sua rede de contatos qualificada.',
  'Você quer aprender estratégias práticas de vendas e ecossistema de negócios.',
  'Você valoriza eventos bem organizados, com conteúdo de qualidade e gastronomia premium.',
];

export default function TargetAudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0805]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[Montserrat] font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Para Quem É{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              Este Evento?
            </span>
          </h2>
        </motion.div>

        {/* Items */}
        <div className="space-y-5">
          {audienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#d4a574]/20 transition-colors duration-300"
            >
              <CheckCircle className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
