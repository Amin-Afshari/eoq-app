import React from "react";

import ToolTip from "./ToolTip";

import "./DataInput.css";

const DataInput = (props) => {
  return (
    <div className="data-input">
      <div className="data-text">
        <ToolTip tooltip={props.tooltip}>
          <div className="data-title">
            <h3>{props.title}</h3>
          </div>
        </ToolTip>
        {props.description && <p>{props.description}</p>}
      </div>
      <div className="data-symbol">
        <h3>{props.symbol}</h3>
      </div>
      <div className="data-input__input">
        <input
          required={true}
          name={props.symbol}
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          value={props.value}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
};

export default DataInput;
