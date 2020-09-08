import "./_informations.scss";
import React from "react";
import FirstInformationsSection from "./FirstInformationsSection/FirstInformationsSection";

const Informations = () => {
  return (
    <section className="informations">
      <FirstInformationsSection />
      <div className="informations__second"></div>
      <div className="informations__third"></div>
      <div className="informations__fourth"> </div>
    </section>
  );
};

export default Informations;
