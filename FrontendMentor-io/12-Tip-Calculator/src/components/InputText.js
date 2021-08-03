import React from "react";

const InputText = ({ icon, value, onChange, id, hasError, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      {hasError && <h4 className="error-text">Can't be zero</h4>}
      <div className="icon-wrapper">
        <img src={icon} className="input-icon" alt={id} />
        <input
          {...rest}
          id={id}
          type="number"
          value={value}
          onChange={onChange}
          onBlur={onChange}
        />
      </div>
    </>
  );
};

export default InputText;
