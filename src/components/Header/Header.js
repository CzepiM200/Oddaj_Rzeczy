import "./_header.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { loggedIn, setLoggedIn, auth, user, setUser } = props;
  let email = "";
  if (auth && auth.user) {
    email = user.email;
  }
  return (
    <section className="header">
      <header>
        <div className="header__login">
          {!loggedIn ? (
            <>
              <Link to="/login">
                <div className="header__login-item">Zaloguj</div>
              </Link>{" "}
              <Link to="/signup">
                <div className="header__login-item signup-link">
                  Załóż konto
                </div> 
              </Link>
            </>
          ) : ( 
            <div className="header__login-items">
              <div className="header__login-item email">
                Cześć {email}!
              </div>
              <Link to="/passitems">
                <div className="header__login-item pass-items">
                  Oddaj rzeczy
                </div>
              </Link>
              <Link to="/signout"> 
                <div
                  className="header__login-item singout"
                  onClick={() => {
                    auth.Logout();
                  }}
                >
                  Wyloguj się
                </div>
              </Link>
            </div>
          )}
        </div>
        <nav className="header__nav">
          <Link to="/">
            <div className="header__nav-item">Start</div>
          </Link>
          <Link to="/">
            <div className="header__nav-item">O co chodzi?</div>
          </Link>
          <Link to={{ pathname: "/", hash: "#about" }}>
            <div className="header__nav-item">O nas</div>
          </Link>
          <Link to="/">
            <div className="header__nav-item">Fundacja i organizacje</div>
          </Link>
          <Link to="/">
            <div className="header__nav-item">Kontakt</div>
          </Link>
        </nav>
      </header>
    </section>
  );
};

export default Header;
