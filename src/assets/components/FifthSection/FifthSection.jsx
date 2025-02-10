import React from "react";
import camp12 from "../../imagens/camp12.jpg";
import "./FifthSection.css";

const FifthSection = () => {
  return (
    <section className="fifthSection relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="relative z-10 max-w-[65rem] mx-auto px-4">
        <h2 className="text-4xl font-bold leading-tight mb-8">
          Dê ao seu filho uma experiência inesquecível no Illumina
          Camp!
        </h2>

        <div className="relative z-10 w-full max-w-[1000px] h-1 bg-yellow-400 mx-auto mt-4 mb-12"></div>
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
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-4">
            <p className="text-[16px] leading-[20px] text-justify">
              Você quer que seu filho saia da rotina, se desconecte das telas
              e viva aventuras que vão marcar sua infância? No <span className="text-yellow-500" font-semibold>Illumina
                Camp</span>, ele terá a oportunidade de explorar a natureza, fazer
              novas amizades e aprender valores que o acompanharão para
              o resto da vida.
            </p>

            <p className="text-[16px] leading-[20px] text-justify">
              Nosso acampamento infantojuvenil é um ambiente seguro,
              projetado para incentivar a autonomia, o espírito de equipe e o
              desenvolvimento pessoal através de atividades ao ar livre.
              Cada momento é pensado para despertar a curiosidade, a
              criatividade e a resiliência dos nossos pequenos aventureiros.
              Enquanto eles vivem dias incríveis, você tem a tranquilidade de
              saber que estão sob os cuidados de uma equipe preparada,
              pronta para proporcionar uma experiência transformadora.

            </p>
            <p className="text-[16px] leading-[20px] text-justify mt-6">
              Garanta já a vaga do seu filho e proporcione a ele momentos
              que serão lembrados para sempre!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FifthSection;
