import React from "react";
// eslint-disable-next-line import/no-unresolved
import iconDollar from "url:../resources/icon-dollar.svg";
import { useAppState } from "../App";

const Bill = () => {
  const [state, dispatch] = useAppState();
  const { bill } = state;
  console.log("RENDER BILL");

  return (
    <div>
      <label htmlFor="bill">Bill</label>
      <div>
        <img src={iconDollar} alt="bill" />
        <input
          className=""
          type="number"
          id="bill"
          name="bill"
          value={bill}
          onChange={({ target }) => {
            dispatch({
              type: "INPUT_BILL",
              bill: target.value,
            });
          }}
          onBlur={({ target }) => {
            dispatch({
              type: "INPUT_BILL",
              bill: target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Bill;
