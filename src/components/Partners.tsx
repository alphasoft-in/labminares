import React from 'react';

const partners = [
    { name: "Global Lab Equipment", type: "Tecnología" },
    { name: "Precision Instruments", type: "Equipamiento" },
    { name: "Mining Tech Solutions", type: "Software" },
    { name: "EcoMining Partners", type: "Sostenibilidad" },
    { name: "Advanced Metallurgy", type: "Investigación" },
    { name: "Tech Mining Industry", type: "Sistemas" },
    { name: "SafeMining Solutions", type: "Seguridad" },
    { name: "Digital Mine Lab", type: "Automatización" },
    { name: "EcoAnalytical Systems", type: "Análisis" },
    { name: "Pure Gold Refining", type: "Servicios" }
];

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Partners = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [itemsPerView, setItemsPerView] = React.useState(5);

    const totalItems = partners.length;
    const maxIndex = Math.max(0, totalItems - itemsPerView);

    // Update items per view based on screen size
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerView(1);
            else if (window.innerWidth < 768) setItemsPerView(2);
            else if (window.innerWidth < 1024) setItemsPerView(3);
            else setItemsPerView(5);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-advance
    React.useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    return (
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle separator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row-reverse md:items-end md:justify-between gap-6 mb-12">
                    <div className="text-center md:text-right">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                            <span className="text-brand-primary font-bold uppercase tracking-[0.2em] text-[9px]">Alianzas Estratégicas</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
                            Aliados <span className="text-brand-primary">Estratégicos</span>
                        </h2>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all active:scale-95 group/btn shadow-sm bg-white">
                            <FontAwesomeIcon icon={faChevronLeft} className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover/btn:-translate-x-0.5 transition-transform" />
                        </button>
                        <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all active:scale-95 group/btn shadow-sm bg-white">
                            <FontAwesomeIcon icon={faChevronRight} className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden px-2">
                    <div
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                    >
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex-shrink-0 px-3"
                            >
                                <div className="group bg-white/50 border border-gray-200 p-6 md:p-8 rounded-3xl h-40 md:h-48 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-brand-primary/20 hover:-translate-y-1">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-100/50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-brand-primary/5 transition-colors">
                                        <FontAwesomeIcon icon={faHandshake} className="h-5 w-5 md:h-6 md:w-6 text-gray-300 group-hover:text-brand-primary transition-colors" />
                                    </div>
                                    <h4 className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest leading-tight group-hover:text-gray-900 transition-colors truncate w-full">
                                        {partner.name}
                                    </h4>
                                    <span className="text-[7px] md:text-[8px] font-bold text-brand-primary/30 uppercase tracking-normal mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {partner.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/2 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Partners;
