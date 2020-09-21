import "./_signUp.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Header />
      <section className="signup">
        <article className="signup__window">
          <div className="signup__window_top">
            <h1>Załóż konto</h1>
            <DecorationIcon />
          </div>
          <form className="signup__window_form">
            <label>Email</label>
            <input type="email"></input>
            <label>Hasło</label>
            <input type="password"></input>
            <label>Powtórz hasło</label>
            <input type="password"></input>
          </form>
          <div className="signup__window_buttons">
            <Link to="/login">
              <p className="signup__login">Zaloguj się</p>
            </Link>
            <p className="signup__signup">Załóż konto</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default SignUp;
