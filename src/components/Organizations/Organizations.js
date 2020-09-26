import "./_organizations.scss";
import React, { useState } from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";

const tempFundationsList = [
  {
    name: "Fundacja “Dbam o Zdrowie”",
    description:
      "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    name: "Fundacja “Dla dzieci”",
    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    items: "ubrania, meble, zabawki",
  },
  {
    name: "Fundacja “Bez domu”",
    description:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja “Dbam o Zdrowie 2”",
    description:
      "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    name: "Fundacja “Dla dzieci 2”",
    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    items: "ubrania, meble, zabawki",
  },
  {
    name: "Fundacja “Bez domu 2”",
    description:
      "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: "ubrania, jedzenie, ciepłe koce",
  },
  {
    name: "Fundacja “Dbam o Zdrowie 3”",
    description:
      "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    name: "Fundacja “Dla dzieci 3”",
    description: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
    items: "ubrania, meble, zabawki",
  },
];

const Organizations = () => {
  const [fundations, setFundations] = useState(true);
  const [fundationsList, setFundationsList] = useState([...tempFundationsList]);
  const [organizations, setOrganizations] = useState(false);
  const [organizationsList, setOrganizationsList] = useState([
    ...tempFundationsList,
  ]);
  const [local, setLocal] = useState(false);
  const [localList, setLocalList] = useState([...tempFundationsList]);
  const [currentList, setCurrentlList] = useState(tempFundationsList);
  const [page, setPage] = useState(0);

  const renderPages = () => {
    return currentList.map((item, index) => {
      if (index % 3 === 0) {
        return (
          <div
            key={index}
            className={`organizations__list_pages-item${
              index / 3 === page ? " active" : ""
            }`}
            onClick={() => {
              setPage(index / 3);
            }}
          >
            {1 + index / 3}
          </div>
        );
      }
    });
  };

  return (
    <section className="organizations">
      <article className="organizations__header">
        <h1>Komu pomagamy?</h1>
        <DecorationIcon />
      </article>
      <article className="organizations__type">
        <div className="organizations__type_buttons">
          <p
            className={fundations ? "organizations__selected" : undefined}
            onClick={() => {
              setFundations(true);
              setCurrentlList(fundationsList);
              setOrganizations(false);
              setLocal(false);
            }}
          >
            Fundacjom{`\n`}
          </p>
          <p
            className={organizations ? "organizations__selected" : undefined}
            onClick={() => {
              setFundations(false);
              setOrganizations(true);
              setCurrentlList(organizationsList);
              setLocal(false);
            }}
          >
            Organizacjom pozarządowym
          </p>
          <p
            className={local ? "organizations__selected" : undefined}
            onClick={() => {
              setFundations(false);
              setOrganizations(false);
              setLocal(true);
              setCurrentlList(localList);
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
        {currentList.length > page * 3 ? (
          <div className="organizations__list_item">
            <div className="organizations__list_first">
              <h2>{currentList[page * 3].name}</h2>
              <p>{currentList[page * 3].description}</p>
            </div>
            <div className="organizations__list_second">
              <p>{currentList[page * 3].items}</p>
            </div>
          </div>
        ) : null}

        {currentList.length > page * 3 + 1 ? (
          <>
            <div className="organizations__list_line"></div>
            <div className="organizations__list_item">
              <div className="organizations__list_first">
                <h2>{currentList[page * 3 + 1].name}</h2>
                <p>{currentList[page * 3 + 1].description}</p>
              </div>
              <div className="organizations__list_second">
                <p>{currentList[page * 3 + 1].items}</p>
              </div>
            </div>
          </>
        ) : null}

        {currentList.length > page * 3 + 2 ? (
          <>
            <div className="organizations__list_line"></div>
            <div className="organizations__list_item">
              <div className="organizations__list_first">
                <h2>{currentList[page * 3 + 2].name}</h2>
                <p>{currentList[page * 3 + 2].description}</p>
              </div>
              <div className="organizations__list_second">
                <p>{currentList[page * 3 + 2].items}</p>
              </div>
            </div>
          </>
        ) : null}

        <div className="organizations__list_pages">{renderPages()}</div>
      </article>
    </section>
  );
};

export default Organizations;
