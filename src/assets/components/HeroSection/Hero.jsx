import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import campingImage from "../../imagens/camp.jpg";
import campingImage2 from "../../imagens/camp2.jpg";
import campingImage3 from "../../imagens/camp3.jpg";
import "./Hero.css";

const images = [campingImage, campingImage2, campingImage3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática de imagem a cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="heroSection relative w-full h-[600px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-center text-white pt-[60px] transition-all duration-500 "
      loading="lazy" style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 p-6 rounded-md">
        <h1 className="uppercase text-3xl md:text-5xl font-bold mb-4">Viva o acampamento dos seus sonhos</h1>
        <p className="text-[15px] leading-[20px] text-[17px] mt-2 mb-8">Arte, música e aventura em um só lugar. Faça amigos, descubra talentos e viva momentos inesqueciveis no Illumina Camp</p>
        <button className="relative mt-4 px-8 py-3 text-lg font-bold uppercase tracking-wide text-black bg-yellow-400 rounded-lg overflow-hidden transition-all duration-300 ease-in-out 
                   hover:scale-105 shadow-lg hover:bg-[#ffff003b] hover:text-white">
          <span className="absolute inset-0 border-2 border-yellow-500 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          Conheça
        </button>

      </div>

      {/* Botões Chevron */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition text-white"
      >
        {/*<FaChevronLeft size={16} />*/}
      </button>

      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition text-white"
      >
        {/*<FaChevronRight size={16} />*/}
      </button>

      {/* Indicadores (bolinhas)*/}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentIndex === index ? "bg-yellow-400 scale-110" : "bg-gray-400 hover:bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
