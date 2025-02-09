import React from "react";

const IluminaButtonThree = ({ text = "Reserve sua vaga aqui!" }) => {
  return (
    <button className="relative items-center gap-2 mt-8 pt-[10px] pb-[10px] pl-[10px] pr-[10px] text-[12px] w-[280px] leading-[20px] border-2 border-yellow-600 text-black font-bold uppercase text-center hover:border-blue-600 hover:text-blue-600 transition duration-300">
      {text}
    </button>
  );
};

export default IluminaButtonThree;
