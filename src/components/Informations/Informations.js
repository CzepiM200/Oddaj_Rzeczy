import "./_informations.scss";
import React from "react";
import FirstInformationsSection from "./FirstInformationsSection/FirstInformationsSection";
import SecondInformationsSection from "./SecondInformationsSection/SecondInformationsSection";
import ThirdInformationsSection from "./ThirdInformationsSection/ThirdInformationsSection";
import FourthInformationsSection from "./FourthInformationsSection/FourthInformationsSection";

const Informations = () => {
  return (
    <section className="informations">
      <FirstInformationsSection />
      <SecondInformationsSection />
      <ThirdInformationsSection />
      <FourthInformationsSection />
    </section>
  );
};

export default Informations;
