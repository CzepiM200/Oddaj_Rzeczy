import "./_mainPage.scss";
import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Informations from "../Informations/Informations";

const MainPage = () => {
  return (
    <section className="main-page">
      <Header />
      <Banner />
      <Informations />
    </section>
  );
};

export default MainPage;
