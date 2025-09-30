import { missionImg, teamImg } from "../../assets/imgs";
import { Heading, Paragraph } from "../ui";

export const About: React.FC = () => {
    return (
        <section className="py-20 px-8">
            
            <div className="max-w-6xl mx-auto">
                <Heading variant="h1" align="center" className="mb-16">
                    Sobre <span className="text-secondary">Nosotros</span>
                </Heading>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img src={missionImg} alt="Misión" className="rounded-2xl" />
                    </div>
                    <div className="space-y-4">
                        <Heading variant="h3">QUIÉNES SOMOS Y NUESTRA MISIÓN</Heading>
                        <Paragraph size="lg">
                            En GymPoint queremos hacer del fitness una experiencia simple, motivadora y accesible para todos. Por eso, desarrollamos una plataforma inteligente que te ayuda a encontrar el gimnasio ideal, seguir tu progreso, mantener la constancia con recompensas y conectar con una comunidad que comparte tu objetivo: una vida activa y saludable.
                        </Paragraph>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 lg:order-1">
                        <Heading variant="h3">NUESTRO EQUIPO: ¿Quienes conforman GymPoint?</Heading>
                        <Paragraph size="lg">
                            En GymPoint, contamos con un equipo joven, multidisciplinario y apasionado por la tecnología y el bienestar. Somos estudiantes de sistemas que unimos nuestras habilidades para desarrollar una app que motive, conecte y transforme la forma en que las personas entrenan.
Nuestro equipo está conformado por especialistas en desarrollo de software y expertos en fitness. Cada integrante aporta su visión para que GymPoint no sea solo una app, sino una experiencia fitness completa y motivadora.
                        </Paragraph>
                    </div>
                    <div className="lg:order-2">
                        <img src={teamImg} alt="Equipo" className="rounded-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};