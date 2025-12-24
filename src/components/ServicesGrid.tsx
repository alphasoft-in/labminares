import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "ÁREA DE VIA SECA",
        description: "Análisis de oro y plata mediante ensayo al fuego (Fire Assay) con alta precisión y estándares internacionales.",
        image: "/images/via_seca.png",
    },
    {
        id: 2,
        title: "ÁREA INSTRUMENTAL",
        description: "Análisis elemental avanzado utilizando tecnologías de absorción atómica e ICP para resultados rápidos y confiables.",
        image: "/images/area_instrumental.png",
    },
    {
        id: 3,
        title: "ÁREA DE VIA HÚMEDA",
        subtitle: "(VOLUMETRIA)",
        description: "Métodos volumétricos clásicos para la determinación exacta de concentrados de cobre, plomo, zinc y otros.",
        image: "/images/via_humeda.png",
    }
];

const ServicesGrid = () => {
    return (
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
                <div key={service.id} className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="h-48 w-full relative overflow-hidden group">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                                {service.title}
                            </h3>
                            {service.subtitle && (
                                <span className="text-sm font-semibold text-brand-secondary block mb-2">{service.subtitle}</span>
                            )}
                            <p className="mt-3 text-base text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center text-brand-primary hover:text-brand-accent font-medium group text-sm">
                                Más detalles
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;
