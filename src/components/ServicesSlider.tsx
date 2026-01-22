import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "ÁREA DE VIA SECA",
        description: "Análisis de oro y plata mediante ensayo al fuego (Fire Assay) con alta precisión.",
        image: "/images/via_seca.png",
        color: "bg-brand-primary"
    },
    {
        id: 2,
        title: "ÁREA INSTRUMENTAL",
        description: "Tecnología de punta para análisis elemental mediante absorción atómica e ICP.",
        image: "/images/area_instrumental.png",
        color: "bg-brand-secondary"
    },
    {
        id: 3,
        title: "ÁREA DE VIA HÚMEDA (VOLUMETRIA)",
        description: "Determinación exacta de concentrados minerales mediante métodos volumétricos clásicos.",
        image: "/images/via_humeda.png",
        color: "bg-brand-surface"
    }
];

const ServicesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 6000); // 6 seconds

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full min-h-[500px] h-[calc(100vh-140px)] md:h-[calc(100vh-105px)] overflow-hidden bg-gray-900 group">
            {/* Slides */}
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Layer */}
                    <div className="absolute inset-0">
                        {/* Base Color / Gradient */}
                        <div className={`absolute inset-0 ${service.color} opacity-90`}></div>
                        <div className={`absolute inset-0 bg-brand-surface/20`}></div>

                        {/* Image with sophisticated blending */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-40 mix-blend-luminosity transform scale-100"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />

                        {/* Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/pattern.png')] bg-repeat"></div>

                        {/* Sophisticated Gradient Mask */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 motion-reduce:transition-none">
                                {index === currentSlide && (
                                    <div className="animate-fade-in-up">
                                        <div className="flex items-center space-x-3 mb-6">
                                            <div className="h-[2px] w-12 bg-brand-primary animate-pulse"></div>
                                            <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px] opacity-80">Excelencia en Laboratorio</span>
                                        </div>
                                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.85] drop-shadow-2xl uppercase">
                                            {service.id === 1 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área de</span>
                                                    <span className="block">Via Seca</span>
                                                </>
                                            ) : service.id === 2 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block">Instrumental</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área de Via Húmeda</span>
                                                    <span className="block text-4xl md:text-6xl">(Volumetría)</span>
                                                </>
                                            )}
                                        </h2>
                                        <p className="text-base md:text-lg text-gray-200 mb-10 font-medium max-w-xl leading-relaxed drop-shadow-lg opacity-90 border-l-2 border-brand-primary pl-6">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <a href="/servicios" className="group/btn relative overflow-hidden bg-brand-primary text-white font-black py-4 px-10 rounded-xl transition-all shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1 active:scale-95">
                                                <span className="relative z-10">DESCUBRIR SERVICIOS</span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                            </a>
                                            <a href="/contactenos" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 font-black py-4 px-10 rounded-xl transition-all hover:-translate-y-1 active:scale-95">
                                                CONTÁCTANOS
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons (visible on hover or always on mobile?) */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-brand-primary/80 text-white p-3 rounded-full transition-colors focus:outline-none backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-0 transition-opacity duration-300"
                aria-label="Previous Slide"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-brand-primary/80 text-white p-3 rounded-full transition-colors focus:outline-none backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-0 transition-opacity duration-300"
                aria-label="Next Slide"
            >
                <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
            </button>

            {/* Minimalist Dash Indicators */}
            <div className="absolute bottom-10 left-10 z-20 flex space-x-3 items-center">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-[2px] transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSlider;
