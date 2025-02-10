import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; 
import "../../../index.css";
import "./Footer.css";
import logoColofurlTP from "../../imagens/logoColofurlTP.png";

const Footer = () => {
  return (
    <section className="footerSection relative bg-black bg-cover bg-center">

      <div className="relative z-10 max-w-[65rem] mx-auto flex flex-col md:flex-row items-center">

        {/* Logo à esquerda */}
        <div className="w-[250px] md:w-[350px] flex justify-center md:justify-start">
          <img src={logoColofurlTP} alt="Logo" className="w-full" />
        </div>


        <div className="copyright flex-1 flex flex-col items-center text-white">
          <span className="text-[20px] md:text-[22px] leading-[1.25rem] text-center mb-4">
            &copy; 2025 Todos os direitos reservados.
          </span>

          {/* Ícones sociais com efeito */}
          <div className="icons flex gap-6 md:gap-8 mb-8">
            <a
              href="https://www.instagram.com/illuminacamp?igsh=MTAwcXM0ZXk1ZG8ycg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12"
            >
              <FaInstagram className="social-icon text-white group-hover:text-pink-500" />
            </a>

            <a
              href="https://www.facebook.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12"
            >
              <FaFacebook className="social-icon text-white group-hover:text-blue-500" />
            </a>

            <a
              href="https://twitter.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12"
            >
              <FaTwitter className="social-icon text-white group-hover:text-blue-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
