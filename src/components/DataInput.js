import React from "react";

import ToolTip from "./ToolTip";

import "./DataInput.css";

const DataInput = (props) => {
  return (
    <div className="data-input">
      <div className="data-text">
        <ToolTip tooltip={props.tooltip}>
          <h3 className="data-title">{props.title}</h3>
        </ToolTip>
        {props.description && (
          <p className="data-description">{props.description}</p>
        )}
      </div>
      <h3 className="data-symbol">{props.symbol}</h3>
      <input
        required={true}
        name={props.symbol}
        className="data-input-input"
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default DataInput;
