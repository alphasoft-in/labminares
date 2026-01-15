import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "ÁREA DE VIA SECA",
        description: "Análisis de oro y plata mediante ensayo al fuego (Fire Assay) con alta precisión y estándares internacionales.",
        image: "/images/via_seca.png",
        link: "/servicios#via-seca"
    },
    {
        id: 2,
        title: "ÁREA INSTRUMENTAL",
        description: "Análisis elemental avanzado utilizando tecnologías de absorción atómica e ICP para resultados rápidos y confiables.",
        image: "/images/area_instrumental.png",
        link: "/servicios#area-instrumental"
    },
    {
        id: 3,
        title: "ÁREA DE VIA HÚMEDA",
        subtitle: "(VOLUMETRIA)",
        description: "Métodos clásicos de química húmeda y volumetría para el análisis de concentrados y minerales de alta ley.",
        image: "/images/via_humeda.png",
        link: "/servicios#via-humeda"
    },
    {
        id: 4,
        title: "PRUEBAS METALÚRGICAS",
        description: "Desarrollamos pruebas metalúrgicas a nivel de laboratorio para optimizar procesos de recuperación.",
        image: "/images/pruebas_metalurgicas.png",
        link: "/servicios#pruebas-metalurgicas"
    }
];

const ServicesGrid = () => {
    return (
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
                <div key={service.id} className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl border border-transparent hover:border-brand-primary/20 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-1 group">
                    <div className="h-48 w-full relative overflow-hidden group">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors duration-300">
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
                            <a href={service.link} className="inline-flex items-center text-brand-primary hover:text-brand-accent font-medium group text-sm">
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
