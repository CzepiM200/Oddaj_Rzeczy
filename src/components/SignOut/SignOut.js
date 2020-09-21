import "./_signout.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";

const SignOut = () => {
  return (
    <>
      <Header />
      <section className="signout">
        <article className="signout__window">
          <div className="signout__window_top">
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <DecorationIcon />
          </div>
          <div className="signout__window_buttons">
            <p className="signout__home-page">Strona główna</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default SignOut;
