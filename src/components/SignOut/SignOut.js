import "./_signout.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const SignOut = (props) => {
  const { loggedIn, setLoggedIn } = props;

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <section className="signout">
        <article className="signout__window">
          <div className="signout__window_top">
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <DecorationIcon />
          </div>
          <div className="signout__window_buttons">
            <Link to="/">
              <p className="signout__home-page">Strona główna</p>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default SignOut;
