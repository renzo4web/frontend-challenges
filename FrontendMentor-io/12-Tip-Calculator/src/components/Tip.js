import React, { useState } from "react";
import { useAppState } from "../App";

const Tip = () => {
  const [showCustom, setShowCustom] = useState(false);
  const [state, dispatch] = useAppState();
  const tips = [5, 10, 15, 25, 50];

  const handleInputRadio = ({ target }) => {
    dispatch({
      type: "INPUT_TIP",
      tip: target.value,
    });
  };

  const handleCustom = ({ target }) => {
    setShowCustom(true);
    dispatch({
      type: "INPUT_TIP",
      tip: target.value,
    });
  };

  console.log("render radios");
  return (
    <div>
      <label htmlFor="tip">Select Tip</label>
      {tips.map((tip) => (
        <div className="radio-input" key={tip}>
          <label
            className={
              Number(state.tip) === tip && !showCustom ? "input-selected" : ""
            }
            htmlFor={`%${tip}`}
          >
            %{tip}
          </label>
          <input
            type="radio"
            id={`%${tip}`}
            value={tip}
            checked={Number(state.tip) === tip}
            onChange={handleInputRadio}
          />
        </div>
      ))}
      <label htmlFor="custom-tip">Custom</label>
      <input
        value={showCustom && state.tip}
        onChange={handleCustom}
        type="number"
        name="tip"
        id="custom-tip"
      />
    </div>
  );
};

export default Tip;
