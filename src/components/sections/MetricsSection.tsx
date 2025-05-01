import React from 'react';
import { Timer, Building, ThumbsUp } from 'lucide-react';
import { METRICS } from '../../constants/content';

const MetricsSection: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 40, className: "text-primary-500 mb-4" };
    switch (iconName) {
      case 'Timer': return <Timer {...iconProps} />;
      case 'Building': return <Building {...iconProps} />;
      case 'ThumbsUp': return <ThumbsUp {...iconProps} />;
      default: return null;
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {METRICS.map(metric => (
            <div key={metric.id} className="text-center">
              {getIconComponent(metric.icon)}
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;