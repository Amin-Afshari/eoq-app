import React from "react";

import ToolTip from "./ToolTip";

import "./Results.css";

const Resulst = (props) => {
  return (
    <div className="results">
      <div className="results-text">
        <ToolTip tooltip={props.tooltip}>
          <div className="results-title">
            <h3>{props.title}</h3>
          </div>
        </ToolTip>
        {props.description && (
          <p className="results-description">{props.description}</p>
        )}
      </div>
      <div className="results-symbol">
        <h3>{props.symbol}</h3>
      </div>
      <div className="results-value">
        <h3>{props.value}</h3>
      </div>
    </div>
  );
};

export default Resulst;
