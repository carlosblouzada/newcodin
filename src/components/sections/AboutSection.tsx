import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle
              title="Quem Somos"
              alignment="left"
              className="mb-6"
            />
            <p className="text-gray-700 mb-4 leading-relaxed">
              A Impulse RH é uma consultoria especializada em soluções estratégicas para a gestão de pessoas. 
              Atuamos com empresas que ainda não possuem setor de RH estruturado ou que precisam otimizar seus processos.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              À frente da consultoria está Ana Paula Rodrigues, profissional com mais de 10 anos de experiência 
              em Recursos Humanos.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nosso diferencial está no atendimento humanizado, prático e alinhado aos objetivos do negócio. 
              Acreditamos que o desenvolvimento de pessoas é essencial para o crescimento e sustentabilidade das empresas.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="public/anapaular.png" 
                  alt="Logo" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="italic text-gray-700 mb-2">
                    "Transformamos a gestão de pessoas em estratégia de crescimento, porque entendemos que o capital 
                    humano é o principal diferencial competitivo de qualquer negócio."
                  </p>
                  <p className="font-semibold text-gray-900">— Ana Paula Rodrigues, Fundadora</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipe Impulse RH" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-semibold">Consultoria especializada</p>
                <p className="text-sm">Trabalhamos para alavancar o potencial da sua equipe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;