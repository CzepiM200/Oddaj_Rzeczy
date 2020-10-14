import "./_homePage.scss";
import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Informations from "../Informations/Informations";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Organizations from "../Organizations/Organizations";

const HomePage = (props) => {
  const { loggedIn, setLoggedIn, auth, user, setUser } = props;

  return (
    <section className="home-page">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} auth={auth} user={user} setUser={setUser}  />
      <Banner />
      <Informations />
      <About />
      <Organizations />
      <Contact />
    </section>
  );
};

export default HomePage;
