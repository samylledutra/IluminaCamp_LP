import React from "react";
import { GiCampingTent, GiCampfire, GiPineTree, GiHouse, GiCheckedShield, GiKnifeFork } from "react-icons/gi";
import camp11 from "../../imagens/camp11.jpg";
import IluminaButton from "../Buttons/ButtonThree";

const cardData = [
  {
    icon: <GiCampingTent className="text-4xl text-green-500" />,
    title: "Estrutura e Ambiente do Illumina Camp",
    description:
      "O Illumina Camp foi cuidadosamente planejado para oferecer uma experiência única, combinando natureza, conforto e segurança.",
  },
  {
    icon: <GiPineTree className="text-4xl text-green-700" />,
    title: "A Natureza Como Cenário",
    description:
      "Nosso acampamento está localizado em meio a paisagens deslumbrantes, com cachoeiras cristalinas, trilhas naturais e um ambiente perfeito para quem busca conexão com a natureza e inspiração para a criatividade.",
  },
  {
    icon: <GiHouse className="text-4xl text-yellow-600" />,
    title: "Acomodações Confortáveis",
    description:
      "Esqueça desconforto! Oferecemos acomodações seguras e aconchegantes para garantir que sua experiência seja completa. Cada espaço foi pensado para proporcionar descanso de qualidade após um dia cheio de atividades.",
  },
  {
    icon: <GiCheckedShield className="text-4xl text-red-600" />,
    title: "Segurança 24h",
    description:
      "Contamos com monitores experientes e uma equipe treinada para garantir o bem-estar de todos os participantes. Além disso, há suporte médico disponível durante todo o evento.",
  },
  {
    icon: <GiKnifeFork className="text-4xl text-blue-500" />,
    title: "Alimentação Saudável e Balanceada",
    description:
      "Refeições nutritivas preparadas por profissionais garantem energia para aproveitar cada momento do acampamento. Opções para diferentes dietas estão sempre disponíveis.",
  },
  {
    icon: <GiCampfire className="text-4xl text-orange-500" />,
    title: "Um Lugar Para Criar Memórias Inesquecíveis!",
    description:
      "Seja para explorar a natureza, desenvolver talentos ou criar novas amizades, o Illumina Camp é o lugar perfeito para uma experiência que ficará marcada para sempre.",
  },
];

const StructureSection = () => {
  return (
    <section className="relative text-center pt-10 pb-20 px-4 bg-black/5">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[30px] leading-[30px] font-bold leading-tight mb-12 text-black-800">
          Estrutura e Ambiente do Illumina Camp
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4"
            >
              <div>{card.icon}</div>
              <div className="text-left">
                <h3 className="text-[20px] leading-[20px] text-justify font-semibold mb-2 text-black-700 mb-6">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-justify text-[15px] leading-[20px]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/*<div className="mt-12">
          <img
            src={camp11}
            alt="Ambiente do Illumina Camp"
            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg"
          /></div> */}

        {/* Botão de reserva */}
        <IluminaButton className="mt-10" />
      </div>
    </section>
  );
};

export default StructureSection;
