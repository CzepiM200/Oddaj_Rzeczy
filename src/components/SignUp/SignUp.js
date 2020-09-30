import "./_signUp.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { SignUpWithEmailAndPassword } from "../../firebase/authentication";

const SignUp = () => {
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");
  const [secondPasswordValidation, setSecondPasswordValidation] = useState(
    true
  );
  const [secondPasswordValue, setSecondPasswordValue] = useState("");
  let history = useHistory();

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regex.test(String(email).toLowerCase());
    setEmailValidation(result);
    return result;
  };

  const validatePassword = (password) => {
    validateSecondPassword(secondPasswordValue);
    const result = password.length >= 6 ? true : false;
    setPasswordValidation(result);
    return result;
  };

  const validateSecondPassword = (secondPassword) => {
    const result = secondPassword === passwordValue ? true : false;
    setSecondPasswordValidation(result);
    return result;
  };

  const handleSignUp = (e) => {
    const tempEmailValidation = validateEmail(emailValue);
    const tempPasswordValidation = validatePassword(passwordValue);
    const tempSecondPasswordValidation = validateSecondPassword(
      secondPasswordValue
    );
    if (
      tempEmailValidation &&
      tempPasswordValidation &&
      tempSecondPasswordValidation
    ) {
      SignUpWithEmailAndPassword(emailValue, passwordValue, history);
    }
  };

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
            <input
              type="email"
              className={!emailValidation ? "error" : null}
              value={emailValue}
              name="email"
              onChange={(e) => {
                setEmailValue(e.target.value);
                validateEmail(e.target.value);
              }}
            ></input>
            <label>Hasło</label>
            <input
              className={!passwordValidation ? "error" : null}
              value={passwordValue}
              name="password"
              onChange={(e) => {
                setPasswordValue(e.target.value);
                validatePassword(e.target.value);
              }}
              type="password"
            ></input>
            <label>Powtórz hasło</label>
            <input
              className={!secondPasswordValidation ? "error" : null}
              value={secondPasswordValue}
              name="secondPassword"
              onChange={(e) => {
                setSecondPasswordValue(e.target.value);
                validateSecondPassword(e.target.value);
              }}
              type="password"
            ></input>
          </form>
          <div className="signup__window_buttons">
            <Link to="/login">
              <p className="signup__login">Zaloguj się</p>
            </Link>
            <p className="signup__signup" onClick={handleSignUp}>
              Załóż konto
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default SignUp;
