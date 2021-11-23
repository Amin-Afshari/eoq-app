import React, { useState } from "react";

import DataInput from "./DataInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Resulsts from "./Results";

import "./DataForm.css";

function DataForm() {
  const [data, setData] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    eoq: "",
    N: "",
    TC: "",
    TCd: "",
  });

  const checkboxClickHandler = (event) => {
    setData(event.target.checked);
  };

  const [inputData, setInputData] = useState({
    H: "",
    D: "",
    S: "",
    C: "",
    Q: "",
    Cd: "",
  });

  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const clickHandler = (event) => {
    const { H, D, S, C, Q, Cd } = inputData;
    let totalDisCountCost = 0;
    let totalCost = 0;
    const eoq = Math.sqrt(
      (2 * parseFloat(D) * parseFloat(S)) / parseFloat(H)
    ).toFixed(2);
    const orderNumber = (parseFloat(D) / eoq).toFixed(2);
    if (data) {
      totalDisCountCost = (
        orderNumber * parseFloat(S) +
        (parseFloat(H) * Q) / 2 +
        D * parseFloat(Cd)
      ).toFixed(2);
    }
    totalCost = (
      orderNumber * parseFloat(S) +
      (parseFloat(H) * eoq) / 2 +
      D * parseFloat(C)
    ).toFixed(2);

    setResults({
      eoq,
      N: orderNumber,
      TC: totalCost,
      TCd: totalDisCountCost,
    });
    setShowResults(true);
  };

  return (
    <React.Fragment>
      <div className="data-form">
        <DataInput
          tooltip="(Storage Costs + Employee Salaries + Opportunity Costs + Depreciation Costs) / Total Value of Annual Inventory"
          title="هزینه نگهداری کالا"
          description="Holding Cost"
          symbol="H"
          onChange={changeHandler}
          value={inputData.H}
        />
        <DataInput
          title="میزان نیاز در سال"
          description="Annual Demand"
          symbol="D"
          onChange={changeHandler}
          value={inputData.D}
        />
        <DataInput
          title="هزینه هربار سفارش"
          description="Order Cost"
          symbol="S"
          onChange={changeHandler}
          value={inputData.S}
        />
        <DataInput
          title="قیمت کالا"
          symbol="C"
          onChange={changeHandler}
          value={inputData.C}
        />
        <Checkbox onClick={checkboxClickHandler} />
        {data && (
          <React.Fragment>
            <DataInput
              title="قیمت کالای تخفیف دار"
              symbol="Cd"
              onChange={changeHandler}
              value={inputData.Cd}
            />
            <DataInput
              title="حداقل میزان سفارش"
              description="برای شرکت در تخفیف قیمت کالا"
              symbol="Q"
              onChange={changeHandler}
              value={inputData.Q}
            />
          </React.Fragment>
        )}
        <Button onClick={clickHandler} />
        {showResults && (
          <React.Fragment>
            <Resulsts
              title="میزان اقتصادی سفارش"
              symbol="EOQ"
              value={results.eoq || 0}
            />
            <Resulsts
              title="تعداد دفعات اقتصادی سفارش"
              symbol="N"
              value={results.N || 0}
            />
            <Resulsts
              title="هزینه کل"
              description={data && "برای میزان اقتصادی سفارش  "}
              tooltip={"EOQ: " + results.eoq}
              symbol="TC"
              value={results.TC || 0}
            />
            {data && (
              <Resulsts
                title="هزینه کل"
                description="برای کالای تخفیف دار"
                tooltip={"Q:" + inputData.Q}
                symbol="TC"
                value={results.TCd}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default DataForm;
