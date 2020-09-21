import "./_header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="header__login">
          <Link to="/login">
            <div className="header__login-item">Zaloguj</div>
          </Link>
          <Link to="/signup">
            <div className="header__login-item signup-link">Załóż konto</div>
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/">
            <div className="header__nav-item">Start</div>
          </Link>
          <Link to="/">
            <div className="header__nav-item">O co chodzi?</div>
          </Link>
          <Link to="/#about">
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
