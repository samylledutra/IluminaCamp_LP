import React from "react";
import campingImage4 from "../../imagens/camp4.jpg";
import "./ThirdSection.css";

const ThirdSection = () => {
    return (
        <section className="thirdSection relative w-full text-white">
            {/* Fundo com imagem e efeito inclinado */}
            <div
                className="absolute inset-0 bg-cover bg-center h-[600px]"
                style={{
                    backgroundImage: `url(${campingImage4})`,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Conteúdo */}
            <div className="contentSection relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-16 md:py-24 ">
                <h2 className="text-3xl md:text-4xl font-bold leading-[30px] mb-2">
                    Desafie-se, Divirta-se e Cresça!
                </h2>
                <div className="relative z-10 w-full max-w-[1000px] h-1 bg-yellow-400 mx-auto mt-4 mb-8"></div>
                <p className="mt-4 text-[1.125rem] leading-[1.5rem]  md:text-xl">
                    No Illumina Camp, cada dia é uma nova aventura! Nossa programação foi criada para equilibrar diversão, aprendizado e conexão com a natureza.  </p>
            </div>
        </section>
    );
};

export default ThirdSection;
