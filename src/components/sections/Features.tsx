import { progress, routine, search, streak } from '../../assets/imgs';
import { featuresContent } from '../../data';
import { useTheme } from '../../hooks';
import { Heading, Paragraph } from '../ui';
import { FeatureItem } from '../ui/';

export const Features: React.FC = () => {
    const { theme } = useTheme()

    const gradient = theme === 'light' ? 'features-gradient-light' : 'features-gradient-dark';

    return (
        <section className={`py-20 ${gradient}`}>
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <Heading variant="h1" align="center">
                        Busca rápidamente y compara<br />
                        los gimnasios de tu zona.
                    </Heading>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <img src={search} className="w-12 h-12 bg-transparent rounded-lg mx-auto mb-4"/>
                        <Paragraph size="lg" align="center">BÚSQUEDA RÁPIDA Y SENCILLA</Paragraph>
                    </div>
                    
                    <div className="text-center">
                        <img src={routine} className="w-12 h-12 bg-transparent rounded-lg mx-auto mb-4"/>
                        <Paragraph size="lg" align="center">GESTIÓN DE RUTINA</Paragraph>
                    </div>
                    
                    <div className="text-center">
                        <img src={progress} className="w-12 h-12 bg-transparent rounded-lg mx-auto mb-4"/>
                        <Paragraph size="lg" align="center">PROGRESO CLARO</Paragraph>
                    </div>
                    
                    <div className="text-center">
                        <img src={streak} className="w-12 h-12 bg-transparent rounded-lg mx-auto mb-4"/>
                        <Paragraph size="lg" align="center">RACHAS Y TOKENS</Paragraph>
                    </div>
                </div>
                
                <div className="space-y-20 mt-16">
                {featuresContent.map((feature, index) => (
                    <FeatureItem 
                    key={feature.id} 
                    feature={feature}
                    reverse={index % 2 !== 0} 
                    />
                ))}
                </div>

            </div>
        </section>
    );
};