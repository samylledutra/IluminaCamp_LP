import React from "react";
import camp13 from "../../imagens/camp13.jpg";
import "./ImagesSection.css"

const ImageSection = () => {
  return (
    <section
      className="imagesSection relative text-center flex items-center justify-center h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${camp13})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay preto para escurecer */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Conteúdo */}
      <div className="imagesContent relative z-10 p-6 rounded-md">
        <h1 className="uppercase text-3xl text-3xl lg:text-[3rem] leading-[60px] font-bold text-white">CONHEÇA MAIS SOBRE O ACAMPAMENTO</h1>
        <p className="text-[20px] leading-[15px] md:text-2xl mt-2 mb-4 text-white">Acesse nosso Instagram!</p>
        <a
          href="https://www.instagram.com/illuminacamp?igsh=MTAwcXM0ZXk1ZG8ycg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative mt-4 px-4 py-3 text-[15px] leading-[15px] font-bold uppercase tracking-wide text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 ease-in-out 
                     hover:scale-105 hover:bg-[#ffff003b] hover:text-white w-[200px] mt-12">
            <span className="absolute inset-0 border-2 border-yellow-500 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            Clique aqui
          </button>
        </a>


      </div>
    </section>
  );
};

export default ImageSection;
