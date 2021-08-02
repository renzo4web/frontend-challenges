import React from "react";

const Result = ({ value, text }) => {
  return (
    <div className="result-value">
      <h4 className="text">{text}</h4>
      <p className="sub">/ person</p>
      <h3 className="value">${value}</h3>
    </div>
  );
};

export default Result;
