import { Heading, Paragraph, Button } from '../ui';

export const GymRegister: React.FC = () => {
    return (
        <section className="py-20 px-8 bg-blue-950 mb-0">
            <div className="max-w-6xl mx-auto text-center">
                <Heading variant="h1" className="mb-6 text-white">
                    ¿Sos dueño de un gimnasio? Mejora la visibilidad y llega a más clientes
                </Heading>

                <div className="mb-12">
                    <Heading variant="h3" className="mb-4 text-white">
                        Con la funcionalidad de búsqueda de Gimnasios de nuestra aplicación buscamos 
                        ayudar no solo a los usuarios finales, sino también a los gimnasios a poder llegar a 
                        más gente y formar una reputación formidable.
                    </Heading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                        <div className="text-6xl font-bold text-blue-300 mb-4">90%</div>
                        <Paragraph className="text-white/80 text-lg">
                            de los gimnasios que se registran de manera oficial consiguen nuevos clientes
                        </Paragraph>
                    </div>

                    <div className="text-center">
                        <div className="text-6xl font-bold text-blue-300 mb-4">63%</div>
                        <Paragraph className="text-white/80 text-lg">
                            de los gimnasios llega a un público nuevo gracias a GymPoint
                        </Paragraph>
                    </div>

                    <div className="text-center">
                        <div className="text-6xl font-bold text-blue-300 mb-4">87%</div>
                        <Paragraph className="text-white/80 text-lg">
                            de los que probaron GymPoint les pareció fácil, práctico e intuitivo.
                        </Paragraph>
                    </div>
                </div>

                <Button size="lg" className='bg-white font-semibold border-0 text-blue-950'>
                    REGISTRAR GIMNASIO
                </Button>
            </div>
        </section>
    );
};