import React, { useState } from "react";
import "./FAQSection.css";


const faqData = [
    {
        question: "O que devo levar para o acampamento?",
        answer: "Leve barraca, saco de dormir, lanterna, comida, água e roupas adequadas para o clima.",
    },
    {
        question: "É seguro acampar à noite?",
        answer: "Sim, desde que você escolha um local seguro, esteja preparado e siga boas práticas de segurança.",
    },
    {
        question: "Posso fazer fogueira no acampamento?",
        answer: "Depende do local. Sempre verifique as regras do parque ou área de camping antes de acender uma fogueira.",
    },
    {
        question: "Qual o melhor lugar para montar uma barraca?",
        answer: "Escolha um local plano, longe de rios que podem transbordar e protegido do vento forte.",
    },
    {
        question: "Posso levar meu animal de estimação para o acampamento?",
        answer: "Sim, mas verifique se o local permite animais e leve tudo o que seu pet precisa, como comida, água e coleira.",
    }
];

const CampFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="FAQSection max-w-3xl mx-auto p-6 mt-[70px] mb-[70px]">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-2 border-blue-600 rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-200 transition"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="itemQuestion text-lg font-medium">{item.question}</span>
                            <span className="plusSign text-[2rem] leading-[1.75rem]">{openIndex === index ? "−" : "+"}</span>
                        </button>

                        <div
                            className={`transition-all overflow-hidden ${openIndex === index ? "max-h-40 p-4" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-800">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CampFAQ;
