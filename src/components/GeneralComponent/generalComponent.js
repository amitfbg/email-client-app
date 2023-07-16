import React from "react";
import './generalComponent.css'

const GeneralComponent = ({ val }) => {
  const getContent = () => {
    if (val === "Loading") return "Loading...";
    if (val === "Error") return "Uh-oh ! Something not right.";
    if (val === "NoData") return "No Data Available";
    else {
      return "";
    }
  };

  return <section className="general-component">{getContent()}</section>;
};

export default GeneralComponent;
