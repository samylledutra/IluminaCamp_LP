import React, { useState } from "react";
import camp5 from "../../imagens/camp5.jpg";
import camp6 from "../../imagens/camp6.jpg";
import camp7 from "../../imagens/camp7.jpg";
import camp8 from "../../imagens/camp8.jpg";
import camp9 from "../../imagens/camp9.jpg";
import camp10 from "../../imagens/camp10.jpg";
import "./TrilhaSection.css";

const trails = [
    { img: camp5 },
    { img: camp6 },
    { img: camp7 },
    { img: camp8 },
    { img: camp9 },
    { img: camp10 },
];

const TrilhaSection = () => {


    return (
        <section className="trilha-container mt-[5rem]">
            <div className="trilha-content">

                {/* Grid transformado em carrossel no mobile */}
                <div className="trilha-carousel">
                    {trails.map((trail, index) => (
                        <div key={index} className="trilha-item">
                            <img src={trail.img} alt={`Trilha ${index + 1}`} className="trilha-img" />
                        </div>
                    ))}
                </div>


                <div className="trilha-text mt-4">
                    <h2>Troque a rotina pela a aventura</h2>
                    <div className="trilha-divider w-full max-w-[1000px]"></div>
                    <p>Se desconecte das telas e se conecte na experiência e diversão</p>


                </div>
            </div>
        </section>
    );
};

export default TrilhaSection;
