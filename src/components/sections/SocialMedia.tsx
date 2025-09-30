import { Heading } from '../ui';
import type { SocialLink } from '../../types';
import { instagramIcon, tiktokIcon, youtubeIcon, linkedinIcon, socialMediaImg } from '../../assets/imgs'
import { useTheme } from '../../hooks';


const socialLinks: SocialLink[] = [
    { name: 'Instagram', url: 'https://instagram.com/gympoint', icon: instagramIcon },
    { name: 'TikTok', url: 'https://tiktok.com/@gympoint', icon: tiktokIcon },
    { name: 'Youtube', url: 'https://youtube.com/@gympoint', icon: youtubeIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/gympoint', icon: linkedinIcon },
];

export const SocialMedia: React.FC = () => {
    const { theme } = useTheme();
    const gradient = theme === 'light' ? 'features-gradient-light' : 'features-gradient-dark';

    return (
        <section className={`py-20 px-8 ${gradient}`}>
            <div className="max-w-6xl mx-auto">
                <Heading variant="h1" align="center" className="mb-16">
                    Nuestras Redes Sociales
                </Heading>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 ml-48">
                    <div className="space-y-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 hover:opacity-80 transition-opacity"
                            >
                                <img 
                                    src={social.icon} 
                                    alt={social.name} 
                                    className="w-16 h-16"
                                />
                                <Heading variant="h2">{social.name}</Heading>
                            </a>  
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <img 
                            src={socialMediaImg} 
                            alt="Redes Sociales" 
                            className="max-w-md w-full scale-x-[-1] mr-28"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <Heading variant="h2">
                        <span className="text-secondary">Síguenos</span> para mantenerte al{' '}
                        <span className="text-secondary">día</span> sobre futuras{' '}
                        <span className="text-secondary">actualizaciones!</span>
                    </Heading>
                </div>
            </div>
        </section>
    );
};