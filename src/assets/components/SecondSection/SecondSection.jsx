import React from "react";
import IluminaButton from "../Buttons/Button";
import "./secondSection.css";

const SecondSection = () => {
  return (
    <section className="secondSection relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="relative text-center z-10 max-w-[65rem] mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-[30px] leading-[30px] font-bold mt-8 mb-4">
            Muito mais que um acampamento: uma experiência transformadora!
          </h2>
          <div className="relative z-10 w-full max-w-[1000px] h-1 bg-yellow-400 mx-auto mt-4 mb-8"></div>


          {/* Parágrafos */}
          <p className="text-[1.125rem] leading-[1.5rem] max-w-3xl text-justify">
            Imagine passar dias cercado por música, arte e aventuras ao ar livre, vivendo momentos incríveis com pessoas que compartilham os mesmos sonhos que você! O <span className="text-yellow-500" font-semibold>Illumina
              Camp</span> é o lugar perfeito para desenvolver seu talento, criar conexões verdadeiras e viver uma experiência imersiva inesquecível.
          </p>

          <p className="text-lg max-w-3xl mt-2 mb-8 text-justify">
            Aqui, cada detalhe foi pensado para que você explore novas habilidades, saia da rotina e descubra o poder da criatividade.
          </p>

          {/* Botão alinhado com os textos */}
          <IluminaButton className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
