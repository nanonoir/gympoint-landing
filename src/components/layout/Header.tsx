import { NavHashLink } from "react-router-hash-link"
import { Button, Logo } from "../ui"
import { ThemeSwitcher } from "../ui"
import { useState } from "react";
import { closeMenuIcon, menuIcon } from "../../assets/imgs";
import { useTheme } from "../../hooks";
import { Container } from "./Container";


const navLinks = [
    { href: '#functions', label: 'Funciones' },
    { href: '#about', label: 'Sobre Nosotros' },
    { href: '#contact', label: 'Contacto' },
];

export const Header = () => {
    const { theme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 h-20 flex items-center
                backdrop-blur-sm shadow-md transition-colors duration-300
                ${theme === 'light'
                ? 'bg-zinc-300 text-gray-800'
                : 'bg-zinc-900 text-gray-100'
                }
            `}
        >
            <Container className="flex justify-between items-center w-full rg">
                <Logo to="#home"/>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavHashLink
                            key={link.href}
                            smooth
                            to={link.href}
                            className={`
                                transition-colors font-display text-xl roun
                                ${theme === 'light'
                                ? 'bg-zinc-300 text-gray-800 hover:text-secondary'
                                : 'bg-zinc-900 text-gray-100 hover:text-secondary'
                                }
                            `} 
                        >
                            {link.label}
                        </NavHashLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <div className="hidden sm:flex gap-2">
                        <Button variant="secondary" size="sm">Descargar App</Button>
                        <Button variant="primary" size="sm">Probar Demo</Button>
                    </div>

                    <button
                        className="md:hidden z-50 text-gray-800 dark:text-gray-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isMenuOpen}
                    >
                        <img src={isMenuOpen ? closeMenuIcon : menuIcon} className="w-12"/>
                    </button>
                </div>
                
                {isMenuOpen && (
                    <nav 
                        className={`absolute top-0 left-0 w-full h-screen md:hidden flex flex-col items-center justify-center gap-8 text-2xl
                        ${theme === 'light'
                        ? 'bg-primary-light'
                        : 'bg-primary-dark'
                        }`} 
                    >
                        {navLinks.map((link) => (
                            <NavHashLink key={link.href} smooth to={link.href} onClick={closeMenu}>
                                {link.label}
                            </NavHashLink>
                        ))}
                        <div className="flex gap-4 mt-8">
                            <Button variant="secondary">Probar Demo</Button>
                            <Button variant="primary">Descargar App</Button>
                        </div>
                    </nav>
            )}
            </Container>
        </header>

    )
}