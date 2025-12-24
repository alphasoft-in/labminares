import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const locations = [
    {
        id: 1,
        name: 'Lima',
        image: '/images/lima_office.png',
        address: 'Av. Simón Bolivar N° 147 Pueblo Libre - Lima',
        phone: '+51 967 605 686',
        email: 'informeslima@minares.com.pe'
    },
    {
        id: 2,
        name: 'Nazca',
        image: '/images/nazca_office.png',
        address: 'Av. Panamericana - Sur Urb. Vista Alegre Mz. K - Lt. 11A',
        phone: '+51 986 635 088',
        email: 'informesnasca@minares.com.pe'
    },
    {
        id: 3,
        name: 'Chala',
        image: '/images/chala_office.png',
        address: 'Av. Arequipa 210, Chala',
        phone: '+51 986 635 086',
        email: 'informeschala@minares.com.pe'
    },
    {
        id: 4,
        name: 'Relave',
        image: '/images/relave_office.png',
        address: 'Calle Plomo Lt. 16 Mz. S-1 Barrio Los Angeles',
        phone: '+51 980 839 840',
        email: 'informesrelave@gmail.com'
    },
    {
        id: 5,
        name: 'Arequipa',
        image: '/images/arequipa_office.png',
        address: 'Parque Industrial de Río Seco, 1ra Etapa, Mz. C-Lt. 2-Cerro Colorado',
        phone: '+51 957 246 955',
        email: 'informesarequipa2023@gmail.com'
    },
    {
        id: 6,
        name: 'Abancay',
        image: '/images/abancay_office.png',
        address: 'Av. Las Malvinas N° 135 - Abancay',
        phone: '+51 914 966 623',
        email: 'informesabancay@minares.com.pe'
    },
];

const LocationsSection = () => {
    const [activeLocationId, setActiveLocationId] = useState<number | null>(null);

    const toggleLocation = (id: number) => {
        if (activeLocationId === id) {
            setActiveLocationId(null);
        } else {
            setActiveLocationId(id);
        }
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Nuestras Oficinas
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Presencia estratégica en los principales corredores mineros del país para atenderlo mejor.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((location) => {
                        const isActive = activeLocationId === location.id;

                        return (
                            <div
                                key={location.id}
                                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default"
                            >
                                {/* Background Image */}
                                <img
                                    src={location.image}
                                    alt={`Oficina en ${location.name}`}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Gradient (Default) */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-90 transition-opacity duration-300 md:group-hover:opacity-0 ${isActive ? 'opacity-0' : ''}`}></div>

                                {/* Content Drawer */}
                                <div
                                    className={`absolute inset-x-0 bottom-0 p-6 bg-brand-surface/95 backdrop-blur-md transition-transform duration-500 ease-in-out border-t-4 border-brand-accent
                                    ${isActive ? 'translate-y-0' : 'translate-y-[calc(100%-88px)]'}
                                    md:group-hover:translate-y-0`}
                                >
                                    {/* Visible Header Area */}
                                    <div
                                        className="flex items-center justify-between mb-4 cursor-pointer"
                                        onClick={() => toggleLocation(location.id)}
                                    >
                                        <div>
                                            <div className="flex items-center space-x-2 text-brand-accent mb-1">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4" />
                                                <span className="text-xs font-bold uppercase tracking-widest">Sede</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight leading-none">{location.name}</h3>
                                        </div>
                                        {/* Hint Icon (Arrow) */}
                                        <div
                                            className={`text-white/50 transition-all duration-300 transform 
                                            md:group-hover:text-brand-accent md:group-hover:rotate-90
                                            ${isActive ? 'text-brand-accent rotate-90' : ''}`}
                                        >
                                            <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
                                        </div>
                                    </div>

                                    {/* Hidden Details (Revealed on Hover or Click) */}
                                    <div className={`space-y-2 transition-opacity duration-500 delay-100
                                        ${isActive ? 'opacity-100' : 'opacity-0'}
                                        md:group-hover:opacity-100`}
                                    >
                                        <div className="w-12 h-0.5 bg-brand-accent/50 mb-2"></div>

                                        {location.address && (
                                            <div className="flex items-start text-gray-300 text-sm group/item hover:text-white transition-colors">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-3 mt-0.5 text-brand-primary shrink-0" />
                                                <span className="leading-snug">{location.address}</span>
                                            </div>
                                        )}
                                        {location.phone && (
                                            <div className="flex items-center text-gray-300 text-sm group/item hover:text-white transition-colors">
                                                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-3 text-brand-primary shrink-0" />
                                                <span>{location.phone}</span>
                                            </div>
                                        )}
                                        {location.email && (
                                            <div className="flex items-center text-gray-300 text-sm group/item hover:text-white transition-colors break-all">
                                                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-3 text-brand-primary shrink-0" />
                                                <span>{location.email}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
