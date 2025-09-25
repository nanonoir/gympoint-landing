import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { IoShieldCheckmark } from "react-icons/io5";
import { useTheme } from "../../../hooks";

interface FooterSection {
    title: string;
    links: { name: string; href: string; }[];
}

const footerSections: FooterSection[] = [
    {
        title: 'Funciones',
        links: [
            { name: 'Búsqueda', href: '#' },
            { name: 'Gestión de Rutina', href: '#' },
            { name: 'Progreso Claro', href: '#' },
            { name: 'Rachas y Tokens', href: '#' },
        ],
    },
    {
        title: 'Sobre Nosotros',
        links: [
            { name: 'Opiniones', href: '#' },
            { name: 'Ventas', href: '#' },
            { name: 'Preguntas frecuentes', href: '#' },
            { name: 'Créditos', href: '#' },
        ],
    },
    {
        title: 'Redes Sociales',
        links: [
            { name: 'Instagram', href: '#' },
            { name: 'TikTok', href: '#' },
            { name: 'Youtube', href: '#' },
            { name: 'LinkedIn', href: '#' },
        ],
    },
    {
        title: 'Términos y Condiciones',
        links: [
            { name: 'Política de privacidad', href: '#' },
            { name: 'Ayuda / Soporte', href: '#' },
        ],
    },
];

export const Footer: React.FC = () => {
    const { theme } = useTheme();

    const bgColor = theme === 'light' ? 'bg-white' : 'bg-zinc-950';
    const textColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
    const headingColor = theme === 'light' ? 'text-gray-900' : 'text-white';
    const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-800';
    const hoverColor = theme === 'light' ? 'hover:text-blue-500' : 'hover:text-blue-400';
    const iconHoverColor = theme === 'light' ? 'hover:text-gray-900' : 'hover:text-white';
    const primaryLinkColor = theme === 'light' ? 'text-blue-600' : 'text-blue-400';
    const shieldIconColor = theme === 'light' ? 'text-blue-600' : 'text-blue-500';

    return (
        <footer className={`font-sans ${bgColor} ${textColor}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                <div className="flex justify-end space-x-6 mb-8">
                    <a href="#" className={`${iconHoverColor} transition-colors`}><FaInstagram size={24} /></a>
                    <a href="#" className={`${iconHoverColor} transition-colors`}><FaTiktok size={24} /></a>
                    <a href="#" className={`${iconHoverColor} transition-colors`}><FaYoutube size={24} /></a>
                    <a href="#" className={`${iconHoverColor} transition-colors`}><FaLinkedin size={24} /></a>
                </div>

                <hr className={borderColor} />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10">
                    

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className={`font-semibold uppercase tracking-wider text-sm ${headingColor}`}>
                                {section.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className={`${hoverColor} transition-colors`}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                     <div>
                        <h3 className={`font-semibold uppercase tracking-wider text-sm ${headingColor}`}>
                            Contacto
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="mailto:gympointhelp@gmail.com" className={hoverColor}>gympointhelp@gmail.com</a></li>
                            <li><span>Tel: 3794-657335</span></li>
                            <li><a href="#" className={hoverColor}>WhatsApp</a></li>
                        </ul>
                    </div>
                </div>

                <hr className={borderColor} />
                
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                       <a href="#" className={`font-semibold ${primaryLinkColor}`}>Descargar App</a>
                       <a href="#" className={hoverColor}>Privacidad</a>
                       <a href="#" className={hoverColor}>Términos</a>
                       <a href="#" className={`flex items-center gap-1 ${hoverColor}`}>
                           Sus opciones de privacidad <IoShieldCheckmark size={20} className={shieldIconColor}/>
                       </a>
                    </div>
                    <p className="mt-4 sm:mt-0">
                        &copy;{new Date().getFullYear()} GymPoint. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
};