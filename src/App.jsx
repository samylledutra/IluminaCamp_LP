import React from "react";
import Navbar from "./assets/components/NavBar/Navbar.jsx";
import Hero from "./assets/components/HeroSection/Hero.jsx";
import SecondSection from "./assets/components/SecondSection/SecondSection.jsx";
import ThirdSection from "./assets/components/ThirdSection/ThirdSection.jsx";
import StructureSection from "./assets/components/StructureSection/StructureSection.jsx";
import ActivitiesSection from "./assets/components/ActivitiesSection/ActivitiesSection.jsx";
import TrilhaSection from "./assets/components/TrilhaSection/TrilhaSection.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import FifthSection from "./assets/components/FifthSection/FifthSection.jsx";
import ImageSection from "./assets/components/ImageSection/ImageSection.jsx";
import CampFAQ from "./assets/components/FAQ/CampFAQ.jsx";


const App = () => {
  return (
    <div className="league-spartanFont w-full h-screen">
      <Navbar />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ActivitiesSection />
      <TrilhaSection />
      <StructureSection />
      <FifthSection />
      <ImageSection />
      <CampFAQ />
      <Footer />
    </div>
  );
};

export default App;
