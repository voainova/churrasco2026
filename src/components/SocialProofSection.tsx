import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Lightbulb, label: 'Ambiente Premium', value: 'Experiência Única' },
  { icon: Users, label: 'Conexões Reais', value: '80 Empresários' },
  { icon: TrendingUp, label: 'Conteúdo Aplicável', value: 'Estratégias Práticas' },
];

export default function SocialProofSection() {
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
            Veja o que aconteceu na{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              última edição
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma noite inesquecível que conectou empreendedores e gerou oportunidades reais de negócio.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          <div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://image.qwenlm.ai/generated-images/8b4fdd21-4889-4b3e-834e-1e2351254265/_result.png"
              alt="Networking no evento"
              className="w-full h-full object-cover min-h-[250px] md:min-h-[400px] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://image.qwenlm.ai/generated-images/14b68c96-3a3f-417b-b558-e5bb4e936878/_result.png"
              alt="Palestra no evento"
              className="w-full h-full object-cover min-h-[190px] md:min-h-[190px] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://image.qwenlm.ai/generated-images/28a9f5af-9735-4fba-b9ed-86cedc28eb4b/_result.png"
              alt="Churrasco gourmet"
              className="w-full h-full object-cover min-h-[190px] md:min-h-[190px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#d4a574]/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a574]/20 to-[#f4c984]/20 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-[#d4a574]" />
              </div>
              <h3 className="font-[Montserrat] font-bold text-white text-lg mb-1">{stat.label}</h3>
              <p className="text-[#d4a574] text-sm font-medium">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
