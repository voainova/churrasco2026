import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <img
                src="/assets/Logo Núcleo Inovação 2025 melhorada.png"
                alt="Logo Núcleo Inovação 2025"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain"
              />
              <img
                src="/assets/logo completa colorida Inovação e Negócios.jpeg"
                alt="Logo Inovação e Negócios"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain rounded"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Conectando empreendedores e gerando oportunidades reais de negócio na Grande Florianópolis.
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <p className="font-[Montserrat] font-bold text-gray-900 mb-1">Local do Evento</p>
            <p className="text-gray-600 text-sm">AEMFLO / CDL São José-SC</p>
            <p className="text-gray-600 text-sm">05 de Novembro de 2026, às 19h00</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="font-[Montserrat] font-bold text-gray-900 mb-2">Dúvidas? Fale com a comissão:</p>
            <a
              href="https://wa.me/5548999128875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-[#d4a574] transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Douglas: (48) 99912-8875</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Núcleo de Inovação e Negócios. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="/assets/Logo Núcleo Inovação 2025 melhorada.png"
                alt="Logo Núcleo Inovação"
                loading="lazy"
                decoding="async"
                className="h-6 w-auto object-contain opacity-70"
              />
              <span className="text-gray-500 text-xs">Inovação & Negócios</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
