import React from "react";
import camp13 from "../../imagens/camp13.jpg";
import logoColofurlTP from "../../imagens/logoColofurlTP.png"; // Ajuste conforme a extensão correta

const ImageSection = () => {
  return (
    <section
      className="relative text-center flex items-center justify-center h-[230px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${camp13})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay preto para escurecer */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Logo sobre a imagem de fundo */}
      <div className="absolute z-10 right-10 md:right-[30rem] mt-[30px]">
        <img src={logoColofurlTP} alt="Logo" className="w-60 md:w-[30rem]" />
      </div>
    </section>
  );
};

export default ImageSection;
