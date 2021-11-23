import React from "react";

import "./ToolTip.css";

const ToolTip = (props) => {
  return (
    <div className="tooltip">
      {props.children}
      {props.tooltip && <span className="tooltiptext">{props.tooltip}</span>}
    </div>
  );
};

export default ToolTip;
