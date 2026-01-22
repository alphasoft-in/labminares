import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
    const phoneNumber = "51967605686";
    const message = encodeURIComponent("Hola, deseo realizar una consulta sobre los servicios de Laboratorios Minares");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 group hover:scale-110 active:scale-95 animate-bounce-subtle"
            aria-label="Contactar por WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap border border-gray-100">
                ¿En qué podemos ayudarte?
            </span>
        </a>
    );
};

export default WhatsAppButton;
