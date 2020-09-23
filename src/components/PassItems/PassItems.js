import "./_passItems.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const PassItems = (props) => {
  const { loggedIn, setLoggedIn } = props;

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <section className="login"></section>
      <Contact />
    </>
  );
};

export default PassItems;
