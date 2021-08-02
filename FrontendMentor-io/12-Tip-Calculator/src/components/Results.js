import React from "react";
import Result from "./Result";

const Results = ({ total, tip }) => {
  return (
    <div className="results">
      <Result text={"Tip Amount"} value={tip} />
      <Result text={"Total"} value={total} />
      <button className="btn-reset">Reset</button>
    </div>
  );
};

export default Results;
