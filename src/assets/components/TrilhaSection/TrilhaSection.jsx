import React, { useState } from "react";
import camp5 from "../../imagens/camp5.jpg";
import camp6 from "../../imagens/camp6.jpg";
import camp7 from "../../imagens/camp7.jpg";
import camp8 from "../../imagens/camp8.jpg";
import camp9 from "../../imagens/camp9.jpg";
import camp10 from "../../imagens/camp10.jpg";

const trails = [
    { img: camp5 },
    { img: camp6 },
    { img: camp7 },
    { img: camp8 },
    { img: camp9 },
    { img: camp10 },
];

const TrilhaSection = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const isValidEmail = email.includes("@") && email.includes(".");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail) {
            setSubmitted(true);
        }
    };

    return (
        <section className="containerSecond relative text-center pt-10 pb-20 px-4 bg-cover bg-center mt-52">
            <div className="relative z-10 max-w-[65rem] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10">

                {/* Grid de imagens */}
                <div className="w-full md:w-1/2 grid grid-cols-3 gap-4">
                    {trails.map((trail, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                            <img src={trail.img} alt={trail.title} className="w-full h-36 md:h-40 object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <p className="text-white font-bold text-sm md:text-base">{trail.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <h2 className="text-3xl font-bold leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </h2>

                    <div className="w-full max-w-[1000px] h-1 bg-yellow-400 my-4 mt-8"></div>

                    <p className="text-lg text-justify mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>

                    {/* Formulário de inscrição */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 flex items-center w-full max-w-md bg-white rounded-full shadow-md overflow-hidden"
                    >
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-2 outline-none text-gray-700"
                            required
                        />
                        <button
                            type="submit"
                            disabled={!isValidEmail || submitted}
                            className={`px-6 py-2 text-white font-semibold transition ${submitted ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-gray-700"
                                }`}
                        >
                            Enviar
                        </button>
                    </form>

                    {/* Mensagem de sucesso */}
                    {submitted && (
                        <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default TrilhaSection;
