import { motion } from 'framer-motion';

export default function SponsorsSection() {
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
            Veja as empresas que
            <span className="block bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              investiram neste encontro
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empresas líderes apoiaram esta edição com sua visão e comprometimento com o ecossistema de inovação.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/assets/Art_stories_patrocinadores.jpeg"
              alt="Empresas patrocinadoras do evento"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
