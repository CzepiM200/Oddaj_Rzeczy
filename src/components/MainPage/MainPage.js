import "./_mainPage.scss";
import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Informations from "../Informations/Informations";
import About from "../About/About";

const MainPage = () => {
  return (
    <section className="main-page">
      <Header />
      <Banner />
      <Informations />
      <About />
    </section>
  );
};

export default MainPage;
