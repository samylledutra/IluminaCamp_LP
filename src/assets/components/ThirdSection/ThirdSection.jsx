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
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-16 md:py-24 ">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                    Lorem ipsum dolor sit amet, consectetur.
                </h2>
                <div className="relative z-10 w-full max-w-[1000px] h-1 bg-yellow-400 mx-auto mt-4 mb-8"></div>
                <p className="mt-4 text-lg md:text-xl leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    cursus elit vel urna laoreet fermentum. Sed nec augue dignissim,
                    convallis orci ac, porttitor purus. Donec a luctus justo. Nunc
                    mattis neque a tempus aliquet.  </p>
            </div>
        </section>
    );
};

export default ThirdSection;
