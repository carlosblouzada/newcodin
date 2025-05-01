import React from 'react';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Impulse<span className="text-primary-500">RH</span></h3>
            <p className="text-gray-400 mb-4">
              Transformamos a gestão de pessoas em estratégia de crescimento para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">contato@impulserh.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">São Paulo - SP, Brasil</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Impulse RH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;