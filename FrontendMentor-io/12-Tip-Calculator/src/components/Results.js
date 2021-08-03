import React from "react";
import { useAppState } from "../App";
import Result from "./Result";

const Results = ({ total, tip, initialState }) => {
  const [state, dispatch] = useAppState();
  return (
    <div className="results">
      <Result text={"Tip Amount"} value={tip} />
      <Result text={"Total"} value={total} />
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
            state: initialState,
          })
        }
        className="btn-reset"
      >
        Reset
      </button>
    </div>
  );
};

export default Results;
