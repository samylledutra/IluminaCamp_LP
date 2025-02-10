import React, { useState } from "react";
import "./FAQSection.css";


const faqData = [
    {
        question: "O que é o Illumina Camp?",
        answer: "O Illumina Camp é um acampamento infantojuvenil projetado para proporcionar aprendizado, diversão e conexão com a natureza.Nossa missão é criar uma experiência enriquecedora onde crianças e adolescentes possam desenvolver habilidades, autonomia e novas amizades em um ambiente seguro e estimulante.",
    },
    {
        question: "Quem pode participar?",
        answer: "O Illumina Camp é voltado para crianças e adolescentes de 11 a 17 anos. As atividades são organizadas por faixas etárias, garantindo que cada grupo participe de dinâmicas adequadas ao seu desenvolvimento.",
    },
    {
        question: "Como funciona a hospedagem?",
        answer: "Os participantes ficam acomodados em chalés ou barracas, divididos por idade e gênero. Nossa equipe garante conforto, segurança e acompanhamento 24 horas por monitores treinados.",
    },
    {
        question: "A alimentação é inclusa?",
        answer: "Sim! Oferecemos um cardápio balanceado e nutritivo, com opções para diferentes restrições alimentares. As refeições são preparadas por profissionais especializados em alimentação infantil e juvenil.",
    },
    {
        question: "Como funciona a segurança no acampamento?",
        answer: "A segurança é nossa prioridade. O acampamento conta com: Monitores treinados acompanhando os participantes 24h; Equipe de primeiros socorros e atendimento médico de prontidão; Regras claras para garantir a segurança de todos durante as atividades",
    },
    {
        question: "Como os pais podem acompanhar as atividades?",
        answer: "Os pais recebem atualizações diárias por meio de um grupo exclusivo e também podem entrar em contato com a coordenação a qualquer momento.",
    },
    {
        question: "O que meu filho deve levar?",
        answer: "Após a inscrição, enviamos uma lista completa de itens recomendados, incluindo roupas, produtos de higiene pessoal e acessórios essenciais para o acampamento.",
    },
    {
        question: "Como faço para inscrever meu filho?",
        answer: "As inscrições podem ser feitas pelo nosso site. Como as vagas são limitadas, recomendamos garantir a participação o quanto antes!",
    },
];

const CampFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="FAQSection max-w-3xl mx-auto p-6 mt-[50px] mb-[70px]">
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
