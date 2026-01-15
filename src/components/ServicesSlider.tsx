import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "ÁREA DE VIA SECA",
        description: "Análisis de oro y plata mediante ensayo al fuego (Fire Assay) con alta precisión.",
        image: "/images/via_seca.png",
        color: "bg-red-900"
    },
    {
        id: 2,
        title: "ÁREA INSTRUMENTAL",
        description: "Tecnología de punta para análisis elemental mediante absorción atómica e ICP.",
        image: "/images/area_instrumental.png",
        color: "bg-red-800"
    },
    {
        id: 3,
        title: "ÁREA DE VIA HÚMEDA (VOLUMETRIA)",
        description: "Determinación exacta de concentrados minerales mediante métodos volumétricos clásicos.",
        image: "/images/via_humeda.png",
        color: "bg-red-950"
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
                    {/* Background Image / Color */}
                    <div className={`absolute inset-0 ${service.color}`}>
                        {/* This img tag will work once we generate the images. For now it might show alt text or broken icon if file missing, so we use object-cover */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none'; // Hide if image missing, showing background color
                            }}
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 motion-reduce:transition-none">
                                {index === currentSlide && (
                                    <div className="animate-fade-in-up">
                                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                                            {service.title}
                                        </h2>
                                        <p className="text-xl text-gray-200 mb-8 font-light drop-shadow-sm">
                                            {service.description}
                                        </p>
                                        <a href="#" className="inline-block bg-brand-accent hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                                            Más Información
                                        </a>
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

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-brand-accent w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServicesSlider;
