import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'Posso levar um colega de empresa?',
    answer: 'Sim! As vagas são individuais, basta que cada um adquira seu ingresso pelo link. **Dica:** Temos planos de patrocínio corporativo que contemplam ingressos em grupo e dão a oportunidade de sua equipe ganhar um treinamento completo. Se interessar, entre em contato com o Douglas pelo WhatsApp: (48) 99912-8875.',
  },
  {
    question: 'Há opções vegetarianas ou restrições alimentares?',
    answer: 'Sim, o Chef Rodrigo prepara opções especiais. Basta nos avisar no ato da compra ou enviar uma mensagem após a confirmação.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'O pagamento é processado de forma 100% segura através da plataforma de vendas no link de compra.',
  },
  {
    question: 'Tem estacionamento no local?',
    answer: 'Sim! Há estacionamento gratuito no local, porém com número de vagas limitadas. Portanto, é importante chegar cedo para garantir sua vaga.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  // Parse bold text in answer
  const renderAnswer = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[#f4c984] font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden hover:border-[#d4a574]/20 transition-colors duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="font-[Montserrat] font-bold text-white text-base md:text-lg pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#d4a574]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-gray-400 leading-relaxed">
                {renderAnswer(answer)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#0f0805]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[Montserrat] font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-[#d4a574] to-[#f4c984] bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
