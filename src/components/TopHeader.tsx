import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const TopHeader = () => {
    return (
        <div className="bg-brand-surface text-white py-2.5 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-3 sm:mb-0">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-brand-accent h-4 w-4" />
                        <span>+51 967 605 686</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-brand-accent h-4 w-4" />
                        <span>info@minares.com.pe</span>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="https://www.facebook.com/people/Minares-South-SRL-Laboratorio-Qu%C3%ADmico-Metal%C3%BArgico/61572169857346/?mibextid=ZbWKwL" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="Facebook" target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/minares-south-s-r-l/" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="LinkedIn" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                    </a>
                    <a href="#" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                    </a>
                    <a href="https://www.tiktok.com/@minaressouth?_t=ZM-8tjJrVAFVQs&_r=1" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="TikTok" target='_blank'>
                        <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
