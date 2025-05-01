import React from 'react';
import { 
  LineChart, Heart, UserSearch, Award, Fingerprint 
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { RESULTS } from '../../constants/content';

const ResultsSection: React.FC = () => {
  // Function to get the right icon component
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 32, className: "text-primary-500 mb-3" };
    switch (iconName) {
      case 'LineChart': return <LineChart {...iconProps} />;
      case 'Heart': return <Heart {...iconProps} />;
      case 'UserSearch': return <UserSearch {...iconProps} />;
      case 'Award': return <Award {...iconProps} />;
      case 'Fingerprint': return <Fingerprint {...iconProps} />;
      default: return <LineChart {...iconProps} />;
    }
  };

  return (
    <section 
      id="results" 
      className="py-16 md:py-24 bg-gray-50"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("https://images.pexels.com/photos/6325953/pexels-photo-6325953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Resultados Esperados"
          subtitle="Benefícios que nossos clientes alcançam ao implementar nossas soluções"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESULTS.map(result => (
            <Card key={result.id} className="text-center bg-white/90 backdrop-blur-sm h-full">
              <div className="flex justify-center">
                {getIconComponent(result.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Transforme sua gestão de pessoas</h3>
          <p className="text-gray-700 mb-8">
            Nossas soluções são desenhadas para trazer resultados concretos e mensuráveis para o seu negócio, 
            impactando diretamente no desempenho e satisfação dos colaboradores.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
          >
            Quero esses resultados
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;