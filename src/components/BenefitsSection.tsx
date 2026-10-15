import { motion } from 'framer-motion';
import { Users, BookOpen, ChefHat } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Networking de Alto Nível',
    description: 'Esteja na mesma sala que 80 empresários e gestores da região que estão ativamente buscando parcerias e soluções.',
  },
  {
    icon: BookOpen,
    title: 'Painel Dinâmico de Negócios',
    description: 'Esqueça a teoria. Participe de um talk show interativo com cases reais de empresários de sucesso da Grande Florianópolis. Inovação e vendas na prática.',
  },
  {
    icon: ChefHat,
    title: 'Gastronomia Premium',
    description: 'Churrasco gourmet cuidadosamente preparado pelo Chef Rodrigo, em um ambiente propício para conversas que fecham negócios.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a0f0a]">
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
            O Que Você Vai{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              Viver
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Três pilares que fazem deste evento uma experiência transformadora para sua carreira e seus negócios.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-[#d4a574]/30 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d4a574]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4a574]/20 to-[#f4c984]/10 flex items-center justify-center mb-6 group-hover:from-[#d4a574]/30 group-hover:to-[#f4c984]/20 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-[#d4a574]" />
                </div>
                <h3 className="font-[Montserrat] font-bold text-white text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
