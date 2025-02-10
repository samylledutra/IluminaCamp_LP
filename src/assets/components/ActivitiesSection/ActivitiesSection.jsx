import React from "react";
import { FaMusic, FaTheaterMasks, FaRunning, FaStar, FaUsers } from "react-icons/fa";
import "./ActivitiesSection.css";

const atividades = [
  { icon: <FaMusic className="text-purple-500" />, title: "Oficinas de canto, dança e instrumentos musicais" },
  { icon: <FaTheaterMasks className="text-red-500" />, title: "Teatro e expressão artística" },
  { icon: <FaRunning className="text-green-500" />, title: "Atividades esportivas e desafios ao ar livre" },
  { icon: <FaStar className="text-yellow-500" />, title: "Noites temáticas e shows exclusivos" },
  { icon: <FaUsers className="text-blue-500" />, title: "Conexões reais com pessoas incríveis" }
];

const ActivitiesSection = () => {
  return (
    <section className="activitiesSection relative text-center pt-[15rem] pb-20 px-4 bg-black/5 bg-cover bg-center mt-10">
      <div className="relative z-10 max-w-[65rem] mx-auto px-4 flex flex-col items-center text-center">

        <h2 className="text-[30px] leading-[30px] md:text-4xl font-bold text-black-600 leading-tight mb-12">
          Experiências Incríveis para Todos!
        </h2>

        {/* Container flexível */}
        <div className="containerFlexivel flex flex-col items-center  text-center  gap-10 w-full">

          {/* Lista de atividades */}
          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start">
            {atividades.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 w-full bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 mb-6">
                <div className="text-blue-600 text-3xl">{item.icon}</div>
                <p className="text-justify text-[17px] font-medium">{item.title}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
