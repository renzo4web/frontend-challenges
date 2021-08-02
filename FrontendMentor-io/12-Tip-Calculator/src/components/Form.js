import React, { useState } from "react";
import Bill from "./Bill";
import NumOfPeople from "./NumOfPeople";
import Tip from "./Tip";

const Form = () => {
  //const [formVals, setFormVals] = useState({
  //bill: "",
  //tip: "",
  //people: "",
  //});

  //const handleChange = (key, value) => {
  //setFormVals((prev) => ({ ...prev, [key]: Number(value) }));
  //};
  return (
    <form>
      <Bill />
      <Tip />
      <NumOfPeople />
    </form>
  );
};

export default Form;
