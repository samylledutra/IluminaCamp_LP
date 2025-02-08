import React from "react";
import IluminaButton from "../Buttons/Button";

const SecondSection = () => {
  return (
    <section className="containerSecond relative text-center pt-10 pb-20 px-4 bg-cover bg-center">
      <div className="relative text-center z-10 max-w-[65rem] mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Título */}
          <h2 className="text-3xl font-bold mt-8 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h2>
          <div className="relative z-10 w-full max-w-[1000px] h-1 bg-yellow-400 mx-auto mt-4 mb-8"></div>


          {/* Parágrafos */}
          <p className="text-lg max-w-3xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus elit vel urna laoreet fermentum. Sed nec augue dignissim,
            convallis orci ac, porttitor purus. Donec a luctus justo. Nunc
            mattis neque a tempus aliquet. Aenean tempor ut est ut accumsan.
            Morbi ac ex neque. Proin ut sem placerat, blandit orci a, bibendum
            turpis. Mauris sit amet ultricies nunc, at tincidunt ligula.
          </p>

          <p className="text-lg max-w-3xl mt-2 mb-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus elit vel urna laoreet fermentum. Sed nec augue dignissim,
            convallis orci ac, porttitor purus. Donec a luctus justo. Nunc
            mattis neque a tempus aliquet. Aenean tempor ut est ut accumsan.
            Morbi ac ex neque. Proin ut sem placerat, blandit orci a, bibendum
            turpis. Mauris sit amet ultricies nunc, at tincidunt ligula.
          </p>

          {/* Botão alinhado com os textos */}
          <IluminaButton className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
