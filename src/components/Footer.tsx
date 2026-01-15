import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-surface text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">LABMINARES</h3>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            Líderes en servicios de análisis de laboratorio para la minería,
                            brindando precisión, confianza y tecnología de punta en cada resultado.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                                <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            {['Inicio', 'Nosotros', 'Servicios', 'Productos', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm hover:text-brand-accent transition-colors flex items-center group">
                                        <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-2 text-brand-primary group-hover:text-brand-accent transition-colors" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info (Headquarters) */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contacto Principal</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3 text-brand-primary mt-0.5" />
                                <span className="text-sm text-gray-400">Calle Marcos Farfan 3377, Independencia - Lima</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-3 text-brand-primary" />
                                <span className="text-sm text-gray-400">+51 967 605 686</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-3 text-brand-primary" />
                                <span className="text-sm text-gray-400">info@labminares.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter or Call to Action */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Horario de Atención</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Nuestro equipo está disponible para atender sus consultas.
                        </p>
                        <div className="bg-brand-primary/10 p-4 rounded-lg border border-brand-primary/20">
                            <p className="text-brand-accent font-semibold text-sm mb-1">Lunes - Viernes:</p>
                            <p className="text-gray-400 text-sm mb-3">7:00 AM - 7:00 PM</p>
                            <p className="text-brand-accent font-semibold text-sm mb-1">Sábados:</p>
                            <p className="text-gray-400 text-sm">9:00 AM - 1:00 PM</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer: Copyright */}
            <div className="border-t border-gray-800 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        &copy; {currentYear} LABMINARES. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
