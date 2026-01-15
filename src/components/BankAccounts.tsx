import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheckCircle, faCreditCard, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const bankData = [
    {
        bank: "BCP",
        logo: "/images/bcp_logo.png",
        accent: "#002A54",
        accounts: [
            {
                type: "Cuenta Corriente Soles",
                number: "193-1789194-0-65",
                cci: "002193001789194065-16"
            },
            {
                type: "Cuenta Corriente Dólares",
                number: "192-1011507-1-51",
                cci: "002192001011507151-35"
            }
        ]
    },
    {
        bank: "Scotiabank",
        logo: "/images/scotiabank_logo.png",
        accent: "#ED1C24",
        accounts: [
            {
                type: "Cuenta Corriente Soles",
                number: "000-2815-003",
                cci: "009-010-000002815003-15"
            }
        ]
    }
];

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text.replace(/\s/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 ${copied
                ? "bg-green-500 text-white shadow-lg shadow-green-500/20 scale-95"
                : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-100"
                }`}
        >
            <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} className="h-3 w-3" />
            <span>{copied ? "Copiado" : "Copiar"}</span>
        </button>
    );
};

const BankAccounts = () => {
    return (
        <section className="mt-16 pt-10 border-t border-gray-100">
            <div className="text-center mb-10">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-3 border border-brand-primary/10">
                    <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                    Pagos Seguros
                </span>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight uppercase mb-3">Información Bancaria</h2>
                <p className="max-w-xl mx-auto text-gray-500 text-xs font-medium">
                    Números de cuenta oficiales para pagos y transferencias.
                </p>
            </div>

            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                    {bankData.map((bank, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Bank Header Section */}
                            <div className="px-8 py-5 flex items-center justify-between bg-gray-50/30">
                                <div className="h-7">
                                    <img src={bank.logo} alt={bank.bank} className="h-full object-contain filter drop-shadow-sm" />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Canal Oficial</span>
                            </div>

                            {/* Bank Accounts Section */}
                            <div className="p-8 space-y-8 flex-1">
                                {bank.accounts.map((acc, aIdx) => (
                                    <div key={aIdx} className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: bank.accent }}></div>
                                            <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-tight">{acc.type}</h4>
                                        </div>

                                        <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100/50 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-[9px] text-gray-400 block uppercase font-bold mb-0.5">Número de Cuenta:</span>
                                                    <span className="text-base font-bold text-gray-800 tracking-tight">{acc.number}</span>
                                                </div>
                                                <CopyButton text={acc.number} />
                                            </div>
                                            <div className="flex items-center justify-between border-t border-gray-100/50 pt-3">
                                                <div>
                                                    <span className="text-[9px] text-gray-400 block uppercase font-bold mb-0.5">CCI (Interbancario):</span>
                                                    <span className="text-[13px] font-bold text-gray-600 tracking-tight">{acc.cci}</span>
                                                </div>
                                                <CopyButton text={acc.cci} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default BankAccounts;
