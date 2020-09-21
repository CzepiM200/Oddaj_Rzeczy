import "./_logIn.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const LogIn = (props) => {
  const { loggedIn, setLoggedIn } = props;

  const HandleLogIn = (e) => {
    setLoggedIn(true);
  };

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
            <Link to="/signup">
              <p className="login__signup">Załóż konto</p>
            </Link>
            <Link to="/">
              <p className="login__login" onClick={HandleLogIn}>
                Zaloguj się
              </p>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default LogIn;
