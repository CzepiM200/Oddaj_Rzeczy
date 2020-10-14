import "./_logIn.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LogIn = (props) => {
  const { loggedIn, setLoggedIn, auth } = props;
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  let history = useHistory();


  const HandleLogIn = (e) => {
    setLoggedIn(true);
    auth.LoginWithEmailAndPassword(emailValue, passwordValue, history);
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
            <input name="email" type="email" onChange={(e) => {
                setEmailValue(e.target.value);
              }}></input>
            <label>Hasło</label>
            <input name="password" type="password" onChange={(e) => {
                setPasswordValue(e.target.value);
              }}></input>
          </form>
          <div className="login__window_buttons">
            <Link to="/signup">
              <p className="login__signup">Załóż konto</p>
            </Link>
            
            <p className="login__login" onClick={HandleLogIn}>
                Zaloguj się
            </p>
            
          </div>
        </article>
      </section>
    </>
  );
};

export default LogIn;
