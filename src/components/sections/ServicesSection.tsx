import React from 'react';
import { 
  Users, Briefcase, UserSearch, BookOpen, 
  BarChart, ClipboardList
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { SERVICES } from '../../constants/content';

const ServicesSection: React.FC = () => {
  // Function to get the right icon component
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 40, className: "text-primary-500 mb-4" };
    switch (iconName) {
      case 'Users': return <Users {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      case 'UserSearch': return <UserSearch {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'BarChart': return <BarChart {...iconProps} />;
      case 'ClipboardList': return <ClipboardList {...iconProps} />;
      default: return <Users {...iconProps} />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções personalizadas para cada fase e necessidade da sua empresa"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <Card key={service.id} hoverEffect={true} className="flex flex-col h-full">
              {getIconComponent(service.icon)}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;