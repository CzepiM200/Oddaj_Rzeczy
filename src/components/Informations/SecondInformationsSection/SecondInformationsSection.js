import "./_secondInformationsSection.scss";
import React from "react";
import { ReactComponent as DecorationIcon } from "../../../images/svg/Decoration.svg";

const SecondInformationsSection = () => {
  return (
    <div className="informations__second">
      <h2>Wystarczą 4 proste kroki</h2>
      <DecorationIcon />
    </div>
  );
};

export default SecondInformationsSection;
