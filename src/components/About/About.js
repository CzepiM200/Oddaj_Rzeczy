import "./_about.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../images/svg/Decoration.svg";
import SignatureIcon from "../../images/svg/Signature.svg";

const About = () => {
  return (
    <section id="about" className="about">
      <article className="about__description">
        <h1 className="about__description_title">O nas</h1>
        <DecorationIcon />
        <p className="about__description_text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <div className="about__description_signature">
          <img src={SignatureIcon} />
        </div>
      </article>
      <article className="about__image"></article>
    </section>
  );
};

export default About;
