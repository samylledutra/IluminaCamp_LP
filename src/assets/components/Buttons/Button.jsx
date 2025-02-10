import React from "react";

const IluminaButton = ({ text = "Mais sobre Illumina Camp" }) => {
  return (
    <button className="relative flex items-center gap-2 mt-8 px-6 py-3 border-2 border-yellow-600 text-black font-bold uppercase hover:border-blue-600 hover:text-blue-600 transition duration-300">
      {text}
    </button>
  );
};

export default IluminaButton;
