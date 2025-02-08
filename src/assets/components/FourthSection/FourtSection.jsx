import React from "react";
import camp11 from "../../imagens/camp11.jpg";

const FourtSection = () => {
    return (
        <section className="relative text-center pt-10 pb-20 px-4 bg-black/5 bg-cover bg-center ">
            <div className="relative z-10 max-w-[65rem] mx-auto px-4 flex flex-col items-center text-center">

                {/* Título acima */}
                <h2 className="text-4xl font-bold leading-tight mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </h2>

                {/* Container para imagem e texto */}
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10 w-full">
                    {/* Texto ao lado da imagem */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8">
                        <p className="text-lg text-justify mt-6 md:mt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>

                        <p className="text-lg text-justify mt-6 md:mt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>

                    {/* Imagem */}
                    <div className="w-full md:w-1/2">
                        <img src={camp11} alt="Descrição da imagem" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourtSection;
