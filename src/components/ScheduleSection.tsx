import { motion } from 'framer-motion';

const scheduleItems = [
  { time: '19h00', title: 'Recepção e Networking Inicial', description: 'Chegada, credenciamento e primeiro contato com os participantes.' },
  { time: '19h15', title: 'Abertura Oficial e Celebração de Aniversário', description: 'Momento de celebração do aniversário do Núcleo de Inovação.' },
  { time: '19h30', title: 'Palestra Principal com Fernando Atalaia', description: 'Ecossistema Empresarial: estratégias para aumentar seu faturamento.' },
  { time: '20h30', title: 'Churrasco Gourmet pelo Chef Rodrigo + Open Networking', description: 'Experiência gastronômica premium com continuidade do networking.' },
];

export default function ScheduleSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a0f0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[Montserrat] font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Programação{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              da Noite
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Cada minuto pensado para maximizar sua experiência.
          </p>
          {/* Event Art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#d4a574]/20 shadow-2xl shadow-[#d4a574]/10"
          >
            <img
              src="/assets/Arte_feed.jpeg"
              alt="Arte oficial do evento Churrasco da Inovação e Negócios"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a574]/50 via-[#d4a574]/30 to-transparent" />

          {scheduleItems.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex gap-6 md:gap-8 mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#d4a574] to-[#f4c984] flex items-center justify-center shadow-lg shadow-[#d4a574]/20"
                >
                  <span className="text-black font-[Montserrat] font-bold text-xs md:text-sm text-center leading-tight">
                    {item.time}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-2 md:pt-4 flex-1">
                <h3 className="font-[Montserrat] font-bold text-white text-lg md:text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
