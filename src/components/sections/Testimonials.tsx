import { testimonialsData } from '../../data';
import { useMap } from '../../hooks/useMap';
import { Heading, Card, StarRating, Button } from '../ui';

export const Testimonials: React.FC = () => {
    const { openMap } = useMap();

    const handleProbar = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => {
            openMap();
        }, 800);
    };

    return (
        <section className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <Heading variant="h1" align="center" className="mb-16">
                    Opiniones
                </Heading>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {testimonialsData.map((testimonial) => (
                        <Card key={testimonial.id} variant="default" padding="md">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-light">{testimonial.role}</p>
                                </div>

                                <p className="text-sm italic">"{testimonial.comment}"</p>

                                <StarRating rating={testimonial.rating} />
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Button 
                        variant="primary" 
                        size="lg"
                        onClick={handleProbar}
                    >
                        PROBAR
                    </Button>
                    <Button variant="secondary" size="lg">
                        DESCARGAR APP
                    </Button>
                </div>
            </div>
        </section>
    );
};