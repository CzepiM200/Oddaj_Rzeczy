import "./_header.scss";
import React from "react";

const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="header__login">
          <div className="header__login-item">Zaloguj</div>
          <div className="header__login-item">Załóż konto</div>
        </div>
        <nav className="header__nav">
          <div className="header__nav-item">Start</div>
          <div className="header__nav-item">O co chodzi?</div>
          <div className="header__nav-item">O nas</div>
          <div className="header__nav-item">Fundacja i organizacje</div>
          <div className="header__nav-item">Kontakt</div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
