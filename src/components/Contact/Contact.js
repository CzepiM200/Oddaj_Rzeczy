import "./_contact.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";

const Contact = () => {
  const [nameValidation, setNameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [messageValidation, setMessageValidation] = useState(true);

  const validateName = (name) => {
    setNameValidation(name.trim().indexOf(" ") === -1);
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmailValidation(regex.test(String(email).toLowerCase()));
  };

  const validateMessage = (message) => {
    setMessageValidation(message.length >= 120);
  };

  return (
    <section className="contact">
      <article className="contact__form">
        <h1>Skontaktuj się z nami</h1>
        <DecorationIcon />
        <form>
          <div className="contact__form_top">
            <div className="contact__form_name">
              <label>Wpisz swoje imię</label>
              <input
                className={!nameValidation ? "error" : null}
                onChange={(e) => {
                  validateName(e.target.value);
                }}
                type="text"
              ></input>
            </div>
            <div className="contact__form_email">
              <label>Wpisz swój email</label>
              <input
                className={!emailValidation ? "error" : null}
                onChange={(e) => {
                  validateEmail(e.target.value);
                }}
                type="email"
              ></input>
            </div>
          </div>
          <div className="contact__form_bottom">
            <label>Wpisz swoją wiadomość</label>
            <textarea
              className={!messageValidation ? "error" : null}
              onChange={(e) => {
                validateMessage(e.target.value);
              }}
              rows="3"
            ></textarea>
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
