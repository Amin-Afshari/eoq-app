import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button className="action-button " type="submit" onClick={props.onClick}>
      EOQ محاسبه
    </button>
  );
};

export default Button;
