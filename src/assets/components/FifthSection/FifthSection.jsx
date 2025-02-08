import React from "react";
import camp12 from "../../imagens/camp12.jpg";

const FifthSection = () => {
  return (
    <section className="relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="relative z-10 max-w-[65rem] mx-auto px-4">

        {/* Título acima */}
        <h2 className="text-4xl font-bold leading-tight mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </h2>

        {/* Container flexível para imagem e texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10 w-full">
          
          {/* Imagem */}
          <div className="w-full md:w-1/2">
            <img
              src={camp12}
              alt="Descrição da imagem"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Texto ao lado da imagem */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum
              dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit
              amet, consectetur adipiscing. Lorem ipsum dolor sit amet,
              consectetur adipiscing.
            </p>

            <p className="text-lg text-justify mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum
              dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit
              amet, consectetur adipiscing. Lorem ipsum dolor sit amet,
              consectetur adipiscing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FifthSection;
