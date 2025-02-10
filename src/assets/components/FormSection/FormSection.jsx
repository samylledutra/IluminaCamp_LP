import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./FormSection.css";

const FormSection = () => {
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
        <section className="form-container mt-[5rem] bg-black/5">
            <div className="form-content">
                <div className="form-text">
                    <h2>Cadastre-se para receber novidades!</h2>
                    <div className="form-divider w-full max-w-[1000px] bg-yellow-400"></div>
                    <p>Digite seu e-mail para ficar por dentro das novidades.</p>
                </div>

                {/* Formulário */}
                <div className="form-box">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-group">
                            <FaEnvelope className="email-icon text-yellow-500" />
                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" disabled={!isValidEmail || submitted}>
                            {submitted ? "Enviado!" : "Enviar"}
                        </button>
                    </form>
                    {submitted && <p className="form-success">Obrigado! Verifique seu e-mail.</p>}
                </div>
            </div>
        </section>
    );
};

export default FormSection;
