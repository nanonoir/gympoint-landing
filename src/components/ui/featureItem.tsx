import type { FeatureContent } from '../../data';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

interface FeatureItemProps {
  feature: FeatureContent;
  reverse?: boolean;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature, reverse = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="space-y-6">
        <Heading variant="h2" align="left">
          {feature.title}
        </Heading>
        <Paragraph>{feature.description}</Paragraph>
        
        <div className="flex items-start gap-4">
          <div className="text-4xl font-bold text-secondary leading-none">
            {feature.stat.number}
          </div>
          <div>
            <Paragraph>{feature.stat.description}</Paragraph>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 h-80 flex items-center justify-center">
        <Paragraph align="center" color="muted">
          {feature.mediaType === 'video' ? 'Video Ilustrativo' : 'Imagen'}
        </Paragraph>
      </div>
    </div>
  );
};