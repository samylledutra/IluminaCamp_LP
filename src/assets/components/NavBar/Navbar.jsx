import React from "react";
import Logo from '../../imagens/iluminaLogoB&WTP.png';
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navBar absolute top-0 left-0 w-full text-white text-[20px] flex items-start justify-between px-8 z-10">


      {/* Logo responsiva */}
      <img src={Logo} alt="Logo" className="imageLogo h-[15rem] relative top-[-35px]" />

      {/* Menu em telas médias e grandes */}
      <ul className="hidden md:flex gap-6 pt-[35px]">
        <li className="hover:text-yellow-400 cursor-pointer">Find a Campground</li>
        <li className="hover:text-yellow-400 cursor-pointer">Camping at IluminaCamp</li>
        <li className="hover:text-yellow-400 cursor-pointer">Ways to Stay</li>
      </ul>
    </nav>
  );
};

export default Navbar;
