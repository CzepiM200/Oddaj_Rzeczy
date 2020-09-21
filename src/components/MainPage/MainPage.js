import "./_mainPage.scss";
import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Informations from "../Informations/Informations";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Organizations from "../Organizations/Organizations";
import LogIn from "../LogIn/LogIn";

const MainPage = () => {
  return (
    <section className="main-page">
      {/* <Header />
      <Banner />
      <Informations />
      <About />
      <Organizations />
      <Contact /> */}
      <LogIn />
    </section>
  );
};

export default MainPage;
