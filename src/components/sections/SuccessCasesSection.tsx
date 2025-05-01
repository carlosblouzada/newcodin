import React from 'react';
import { SUCCESS_CASES } from '../../constants/content';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const SuccessCasesSection: React.FC = () => {
  return (
    <section id="cases" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Cases de Sucesso"
          subtitle="Conheça algumas histórias de transformação e resultados que alcançamos junto aos nossos clientes"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_CASES.map(case_ => (
            <Card key={case_.id} className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{case_.company}</h3>
              
              <div className="space-y-4 flex-grow">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Desafio:</h4>
                  <p className="text-gray-600">{case_.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Solução:</h4>
                  <p className="text-gray-600">{case_.solution}</p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-medium text-primary-700 mb-1">Resultado:</h4>
                  <p className="text-primary-600">{case_.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;