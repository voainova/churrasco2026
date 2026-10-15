import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';

const CTA_LINK = 'https://www.pensanoevento.com.br/eventos/111779/churrasco-da-inovacao-e-negocios-2026-aniversario-do-nucleo';

const included = [
  'Acesso ao Painel Dinâmico com Empresários de Sucesso e Cases Reais',
  'Jantar completo (Churrasco Gourmet)',
  'Bebidas não alcoólicas inclusas',
  'Networking com 80 empresários e gestores',
  'Material de apoio',
];

export default function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-[#1a0f0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 bg-gradient-to-b from-white/5 to-transparent border border-[#d4a574]/30 rounded-3xl overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#d4a574]/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="font-[Montserrat] font-black text-3xl md:text-4xl text-white mb-2">
                Investimento
              </h2>
              <p className="text-gray-400 text-lg">Tudo que você precisa para uma noite transformadora.</p>
            </div>

            {/* Price */}
            <div className="text-center mb-10">
              <p className="text-gray-400 text-base mb-2">Valor do Ingresso:</p>
              <div className="inline-flex items-baseline gap-1">
                <span className="text-[#d4a574] text-xl font-medium">R$</span>
                <span className="font-[Montserrat] font-black text-6xl md:text-7xl bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
                  84
                </span>
                <span className="text-[#d4a574] text-xl font-medium">,00</span>
              </div>
            </div>

            {/* Included list */}
            <div className="max-w-md mx-auto mb-10">
              <h3 className="font-[Montserrat] font-bold text-white text-lg mb-4 text-center">
                O que está incluso:
              </h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#d4a574]" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Scarcity warning */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-8"
            >
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm md:text-base text-center font-medium">
                ⚠️ Atenção: Estritamente limitado a 80 participantes. Vendas por ordem de confirmação.
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center">
              <motion.a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#d4a574] to-[#f4c984] text-black font-[Montserrat] font-bold text-lg rounded-full shadow-lg shadow-[#d4a574]/30 hover:shadow-xl hover:shadow-[#d4a574]/40 transition-all duration-300"
              >
                Garantir meu ingresso por R$ 84,00
                <span className="text-xl">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
