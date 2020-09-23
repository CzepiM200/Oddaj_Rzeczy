import "./_contact.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";

const Contact = () => {
  return (
    <section className="contact">
      <article className="contact__form">
        <h1>Skontaktuj się z nami</h1>
        <DecorationIcon />
        <form>
          <div className="contact__form_top">
            <div className="contact__form_name">
              <label>Wpisz swoje imię</label>
              <input type="text"></input>
            </div>
            <div className="contact__form_email">
              <label>Wpisz swój email</label>
              <input type="email"></input>
            </div>
          </div>
          <div className="contact__form_bottom">
            <label>Wpisz swoją wiadomość</label>
            <textarea rows="3"></textarea>
          </div>
          <button
            className="contact__form_submit"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Wyślij
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
