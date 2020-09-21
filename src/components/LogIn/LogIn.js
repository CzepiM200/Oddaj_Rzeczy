import "./_logIn.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";

const LogIn = () => {
  return (
    <>
      <Header />
      <section className="login">
        <article className="login__window">
          <div className="login__window_top">
            <h1>Zaloguj się</h1>
            <DecorationIcon />
          </div>
          <form className="login__window_form">
            <label>Email</label>
            <input type="email"></input>
            <label>Hasło</label>
            <input type="password"></input>
          </form>
          <div className="login__window_buttons">
            <p className="login__signup">Załóż konto</p>
            <p className="login__login">Zaloguj się</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default LogIn;
