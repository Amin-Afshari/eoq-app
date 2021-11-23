import React from "react";

import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        name="checkbox"
        onClick={props.onClick}
      />
      <label htmlFor="checkbox">
        محاسبه هزینه کل برای سفارشات تعداد بالا با تخفیف در قیمت کالا
      </label>
    </div>
  );
}

export default Checkbox;
