import React, { useState } from 'react';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
    const [showMap, setShowMap] = useState(false);

    const handleDemo = () => {
        setShowMap(!showMap);
    };

    return (
        <section className="pt-12 pb-20 px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">

                <div className="space-y-2">
                    <Heading variant="h1" align="center">
                        Entrena <span className="text-secondary">Inteligente.</span>
                    </Heading>
                    <Heading variant="h1" align="center">
                        <span className="text-secondary">Evoluciona</span> Cada Día.
                    </Heading>
                </div>

                <Paragraph size="lg" color="muted" align="center">
                    Registra, analiza y comparte tu progreso<br />
                    con GymPoint
                </Paragraph>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Button 
                        variant="primary" 
                        size="lg"
                        onClick={handleDemo}
                    >
                        PROBAR DEMO
                    </Button>
                    <Button variant="secondary" size="lg">
                        DESCARGAR APP
                    </Button>
                </div>

                {showMap && (
                    <div className="mt-12 transition-all duration-500 ease-in-out">
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <Paragraph color="muted" align="center">
                                [Componente de Mapa - Placeholder]
                            </Paragraph>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};