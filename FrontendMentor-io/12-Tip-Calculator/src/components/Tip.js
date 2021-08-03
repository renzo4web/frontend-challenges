import React, { useState } from "react";
import { useAppState } from "../App";
import ButtonRadio from "./ButtonRadio";

const Tip = () => {
  const [showCustom, setShowCustom] = useState(false);
  const [state, dispatch] = useAppState();
  const tips = [5, 10, 15, 25, 50];

  const handleInputRadio = ({ target }) => {
    setShowCustom(false);
    dispatch({
      type: "INPUT_TIP",
      tip: target.value,
    });
  };

  const handleCustom = ({ target }) => {
    setShowCustom(true);
    console.log(target.value);
    dispatch({
      type: "INPUT_TIP",
      tip: target.value,
    });
  };

  return (
    <div className="tip-container">
      <label htmlFor="tip">Select Tip</label>
      <div className="radio-container">
        {tips.map((tip) => (
          <ButtonRadio
            tip={tip}
            value={state}
            key={tip}
            key_id={tip}
            showCustom={showCustom}
            onChange={handleInputRadio}
          />
        ))}
        <label className="hide-element" htmlFor="custom-tip">
          Custom
        </label>
        <input
          className="custom-input"
          value={showCustom && state.tip}
          onChange={handleCustom}
          placeholder="Custom"
          type="number"
          name="tip"
          id="custom-tip"
        />
      </div>
    </div>
  );
};

export default Tip;
