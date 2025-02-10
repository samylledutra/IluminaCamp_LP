import React from "react";

const IluminaButtonTwo = ({ text = "Mais sobre Illumina CAMPING" }) => {
  return (
    <button className="relative flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-black font-bold uppercase hover:border-yellow-600 hover:text-yellow-600 transition duration-300">
      {text}
    </button>
  );
};

export default IluminaButtonTwo;
