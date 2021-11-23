import React from "react";

import ToolTip from "./ToolTip";

import "./Results.css";

const Resulst = (props) => {
  return (
    <div className="results">
      <div className="results-text">
        <ToolTip tooltip={props.tooltip}>
          <h3 className="results-title">{props.title}</h3>
        </ToolTip>
        {props.description && (
          <p className="results-description">{props.description}</p>
        )}
      </div>
      <h3 className="results-symbol">{props.symbol}</h3>

      <h3 className="results-value">{props.value}</h3>
    </div>
  );
};

export default Resulst;
