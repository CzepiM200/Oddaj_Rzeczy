import "./_thirdInformationsSection.scss";
import shirt from "../../../images/png/Shirt.png";
import bag from "../../../images/png/Bag.png";
import search from "../../../images/png/Search.png";
import refresh from "../../../images/png/Refresh.png";
import React from "react";

const ThirdInformationsSection = () => {
  return (
    <div className="informations__third">
      <div className="informations__third_item">
        <img src={shirt} alt="Shirt" />
        <p className="informations__third_title">Wybierz rzeczy</p>
        <div className="informations__third_line"></div>
        <p className="informations__third_description">
          ubrania, zabawki, sprzęt i inne
        </p>
      </div>
      <div className="informations__third_item">
        <img src={bag} alt="Shirt" />
        <p className="informations__third_title">Wybierz rzeczy</p>
        <div className="informations__third_line"></div>
        <p className="informations__third_description">
          ubrania, zabawki, sprzęt i inne
        </p>
      </div>
      <div className="informations__third_item">
        <img src={search} alt="Shirt" />
        <p className="informations__third_title">Wybierz rzeczy</p>
        <div className="informations__third_line"></div>
        <p className="informations__third_description">
          ubrania, zabawki, sprzęt i inne
        </p>
      </div>
      <div className="informations__third_item">
        <img src={refresh} alt="Shirt" />
        <p className="informations__third_title">Wybierz rzeczy</p>
        <div className="informations__third_line"></div>
        <p className="informations__third_description">
          ubrania, zabawki, sprzęt i inne
        </p>
      </div>
    </div>
  );
};

export default ThirdInformationsSection;
