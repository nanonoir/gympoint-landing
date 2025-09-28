import { progress, routine, search, streak } from '../../assets/imgs';
import { useTheme } from '../../hooks';
import { Heading, Paragraph } from '../ui';

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
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Heading variant="h2" align="left">
                            Encuentra el gimnasio ideal en segundos
                        </Heading>
                        <Paragraph>
                            Con nuestra función de búsqueda inteligente, GymPoint te muestra los gimnasios más cercanos según tu ubicación. Filtrá por tipo de entrenamiento, horarios, instalaciones o calificaciones de otros usuarios. Ya sea que busques un box de crossfit, un centro de musculación o clases funcionales, lo encontrarás en segundos.
                        </Paragraph>
                        <div className="flex items-start gap-4">
                            <div className="text-4xl font-bold text-secondary leading-none">
                                99%
                            </div>
                            <div>
                                <Paragraph>
                                    de los usuarios ahorro tiempo para encontrar su primer gimnasio o uno nuevo que se adapta a sus necesidades
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-80 flex items-center justify-center">
                        <Paragraph align="center" color="muted">Video Ilustrativo</Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
};