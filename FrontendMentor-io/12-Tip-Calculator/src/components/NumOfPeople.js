import React from "react";
// eslint-disable-next-line import/no-unresolved
import personIcon from "url:../resources/icon-person.svg";
import { useAppState } from "../App";
import InputText from "./InputText";

const NumOfPeople = () => {
  const [state, dispatch] = useAppState();
  const hasError = !state.people && state.bill > 0;

  const handleChange = ({ target }) => {
    dispatch({
      type: "INPUT_PEOPLE",
      people: target.value,
    });
  };

  return (
    <div>
      <InputText
        icon={personIcon}
        value={state.people}
        hasError={hasError}
        className="input-grey"
        id="Number of people"
        onChange={handleChange}
      />
    </div>
  );
};

export default NumOfPeople;
