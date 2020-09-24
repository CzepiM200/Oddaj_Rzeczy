import "./_contact.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";

const Contact = () => {
  const [nameValidation, setNameValidation] = useState(true);
  const [nameValue, setNameValue] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [messageValidation, setMessageValidation] = useState(true);
  const [messageValue, setMessageValue] = useState("");

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

  const validateAllInputs = () => {
    validateName(nameValue);
    validateEmail(emailValue);
    validateMessage(messageValue);
  };

  async function postContactMail() {
    if (nameValidation && emailValidation && messageValidation) {
      const URL = "https://fer-api.coderslab.pl/v1/portfolio/contact";
      // Default options are marked with *
      await fetch(URL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: messageValue,
        }), // body data type must match "Content-Type" header
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Wiadomość została wysłana pomyślnie!");
        })
        .catch((error) => {
          alert("Błąd serwera...");
        });
    } else {
      alert("Pola nie zostały wpełnione prawidłowo!");
    }
  }

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
                  setNameValue(e.target.value);
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
                  setEmailValue(e.target.value);
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
                setMessageValue(e.target.value);
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
              validateAllInputs();
              postContactMail();
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
