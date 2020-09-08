import "./_banner.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";

const Banner = () => {
  return (
    <section className="banner">
      <article className="banner__image"></article>
      <article className="banner__menu">
        <h1>Zacznij pomagać!</h1>
        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
        <DecorationIcon />
        <div className="banner__buttons">
          <p>Oddaj rzeczy</p>
          <p>Zorganizuj zbiórkę</p>
        </div>
      </article>
    </section>
  );
};

export default Banner;
