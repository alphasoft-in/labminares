import React, { useState } from 'react';

interface NavbarProps {
    pathname?: string;
}

const Navbar = ({ pathname = '/' }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const getLinkClass = (path: string, mobile = false) => {
        const baseClass = mobile
            ? "block px-3 py-2 rounded-md text-base font-medium transition-colors"
            : "px-3 py-2 rounded-md text-sm font-medium transition-colors";

        const activeClass = isActive(path)
            ? "text-white bg-gradient-to-b from-transparent to-black/20 border-b-2 border-brand-accent font-bold"
            : "text-white/80 hover:text-white hover:bg-white/5 border-b-2 border-transparent transition-all";

        return `${baseClass} ${activeClass}`;
    };

    return (
        <nav className="bg-brand-primary text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="font-bold text-xl tracking-tight">LabMinares</a>
                    </div>
                    <div className="hidden md:block flex-1">
                        <div className="flex justify-center items-baseline space-x-4">
                            <a href="/" className={getLinkClass('/')}>Inicio</a>
                            <a href="/nosotros" className={getLinkClass('/nosotros')}>Nosotros</a>
                            <a href="/servicios" className={getLinkClass('/servicios')}>Servicios</a>
                            <a href="/productos" className={getLinkClass('/productos')}>Productos</a>
                            <a href="/trabaja-con-nosotros" className={getLinkClass('/trabaja-con-nosotros')}>Trabaja con nosotros</a>
                            <a href="/contactenos" className={getLinkClass('/contactenos')}>Contacto</a>
                        </div>
                    </div>
                    <div className="hidden md:block w-[100px]">
                        {/* Spacer to balance logo width for perfect centering if needed, or actions area */}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-accent hover:bg-brand-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <a href="/" className={getLinkClass('/', true)}>Inicio</a>
                        <a href="/nosotros" className={getLinkClass('/nosotros', true)}>Nosotros</a>
                        <a href="/servicios" className={getLinkClass('/servicios', true)}>Servicios</a>
                        <a href="/productos" className={getLinkClass('/productos', true)}>Productos</a>
                        <a href="/trabaja-con-nosotros" className={getLinkClass('/trabaja-con-nosotros', true)}>Trabaja con nosotros</a>
                        <a href="/contactenos" className={getLinkClass('/contactenos', true)}>Contacto</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
