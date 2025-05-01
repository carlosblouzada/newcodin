import React from 'react';
import { Search, PenTool, Repeat, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { METHODOLOGY_STEPS } from '../../constants/content';

const MethodologySection: React.FC = () => {
  // Function to get the right icon component
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 32, className: "text-white" };
    switch (iconName) {
      case 'Search': return <Search {...iconProps} />;
      case 'PenTool': return <PenTool {...iconProps} />;
      case 'Repeat': return <Repeat {...iconProps} />;
      case 'CheckCircle': return <CheckCircle {...iconProps} />;
      default: return <Search {...iconProps} />;
    }
  };

  return (
    <section 
      id="methodology" 
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Nossa Metodologia"
          subtitle="Um processo personalizado para atender as necessidades específicas da sua empresa"
        />

        <div className="relative">
          {/* Timeline Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {METHODOLOGY_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                className={`
                  md:flex items-center 
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
              >
                {/* Icon for mobile */}
                <div className="md:hidden flex items-center mb-4">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    {getIconComponent(step.icon)}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>

                {/* Content for even items - left side */}
                <div className={`
                  md:w-1/2 
                  ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}
                `}>
                  <h3 className="hidden md:block text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Middle Icon for desktop */}
                <div className="hidden md:flex justify-center">
                  <div className="bg-primary-500 rounded-full p-4 z-10">
                    {getIconComponent(step.icon)}
                  </div>
                </div>

                {/* Content for odd items - right side */}
                <div className={`
                  md:w-1/2 
                  ${index % 2 === 0 ? 'md:hidden' : 'md:hidden'}
                `}>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-100 p-6 rounded-lg">
          <p className="text-center text-gray-700">
            Cada projeto é único e personalizado de acordo com a realidade e necessidades da sua empresa. 
            Nossa metodologia é flexível e adaptável para garantir os melhores resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;