import React from "react";

const ButtonRadio = ({ key_id, id, value, onChange, tip, showCustom }) => {
  return (
    <div className="radio-input" key={key_id}>
      <label
        className={
          Number(value.tip) === tip && !showCustom ? "input-selected" : ""
        }
        htmlFor={`%${tip}`}
      >
        {tip}%
      </label>
      <input
        type="radio"
        id={`%${tip}`}
        value={tip}
        checked={Number(value.tip) === tip}
        onChange={onChange}
      />
    </div>
  );
};

export default ButtonRadio;
