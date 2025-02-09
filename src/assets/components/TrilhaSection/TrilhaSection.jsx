import React, { useState } from "react";
import camp5 from "../../imagens/camp5.jpg";
import camp6 from "../../imagens/camp6.jpg";
import camp7 from "../../imagens/camp7.jpg";
import camp8 from "../../imagens/camp8.jpg";
import camp9 from "../../imagens/camp9.jpg";
import camp10 from "../../imagens/camp10.jpg";
import "./TrilhaSection.css"; // Importando o CSS separado

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
        <section className="trilha-container mt-[15rem]">
            <div className="trilha-content">
                
                {/* Grid transformado em carrossel no mobile */}
                <div className="trilha-carousel">
                    {trails.map((trail, index) => (
                        <div key={index} className="trilha-item">
                            <img src={trail.img} alt={`Trilha ${index + 1}`} className="trilha-img" />
                        </div>
                    ))}
                </div>

                {/* Texto */}
                <div className="trilha-text mt-4">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
                    <div className="trilha-divider w-full max-w-[1000px]"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                    {/* Formulário */}
                    <form onSubmit={handleSubmit} className="trilha-form">
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={!isValidEmail || submitted}>
                            {submitted ? "Enviado!" : "Enviar"}
                        </button>
                    </form>

                    {/* Mensagem de sucesso */}
                    {submitted && <p className="trilha-success">Obrigado! Verifique seu e-mail.</p>}
                </div>
            </div>
        </section>
    );
};

export default TrilhaSection;
