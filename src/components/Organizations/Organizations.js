import "./_organizations.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";

const Organizations = () => {
  const [fundations, setFundations] = useState(true);
  const [organizations, setOrganizations] = useState(false);
  const [local, setLocal] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <section className="organizations">
      <article className="organizations__header">
        <h1>Komu pomagamy?</h1>
        <DecorationIcon />
      </article>
      <article className="organizations__type">
        <div className="organizations__type_buttons">
          <p
            className={fundations && "organizations__selected"}
            onClick={() => {
              setFundations(true);
              setOrganizations(false);
              setLocal(false);
            }}
          >
            Fundacjom
          </p>
          <p
            className={organizations && "organizations__selected"}
            onClick={() => {
              setFundations(false);
              setOrganizations(true);
              setLocal(false);
            }}
          >
            Organizacjom pozarządowym
          </p>
          <p
            className={local && "organizations__selected"}
            onClick={() => {
              setFundations(false);
              setOrganizations(false);
              setLocal(true);
            }}
          >
            Lokalnym zbiórkom
          </p>
        </div>
      </article>
      <article className="organizations__description">
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      </article>
      <article className="organizations__list">
        <div className="organizations__list_item">
          <div className="organizations__list_first">
            <h2>Fundacja “Dbam o Zdrowie”</h2>
            <p>
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </p>
          </div>
          <div className="organizations__list_second">
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </div>
        </div>
        <div className="organizations__list_line"></div>
        <div className="organizations__list_item">
          <div className="organizations__list_first">
            <h2>Fundacja “Dla dzieci”</h2>
            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
          </div>
          <div className="organizations__list_second">
            <p>ubrania, meble, zabawki</p>
          </div>
        </div>
        <div className="organizations__list_line"></div>
        <div className="organizations__list_item">
          <div className="organizations__list_first">
            <h2>Fundacja “Bez domu”</h2>
            <p>
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
          </div>
          <div className="organizations__list_second">
            <p>ubrania, jedzenie, ciepłe koce</p>
          </div>
        </div>
        <div className="organizations__list_pages"></div>
      </article>
    </section>
  );
};

export default Organizations;
