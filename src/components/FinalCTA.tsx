import { motion } from 'framer-motion';

const CTA_LINK = 'https://pensanoevento.com.br/teste';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#1a0f0a] to-[#0f0805] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[Montserrat] font-black text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Não deixe para depois.{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              As vagas estão voando.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Garanta agora sua vaga no evento que vai conectar você aos melhores empreendedores da Grande Florianópolis.
          </p>

          <motion.a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#d4a574] to-[#f4c984] text-black font-[Montserrat] font-bold text-xl rounded-full shadow-2xl shadow-[#d4a574]/30 hover:shadow-[#d4a574]/50 transition-all duration-300"
          >
            QUERO GARANTIR MINHA VAGA
            <span className="text-2xl">→</span>
          </motion.a>

          <p className="mt-6 text-gray-500 text-sm">
            Apenas 80 vagas disponíveis • 05/Nov/2026 • AEMFLO/CDL São José-SC
          </p>
        </motion.div>
      </div>
    </section>
  );
}
