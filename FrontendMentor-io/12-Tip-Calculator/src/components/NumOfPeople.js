import React from "react";
// eslint-disable-next-line import/no-unresolved
import people from "url:../resources/icon-person.svg";
import { useAppState } from "../App";

const NumOfPeople = () => {
  const [state, dispatch] = useAppState();

  const handleChange = ({ target }) => {
    dispatch({
      type: "INPUT_PEOPLE",
      people: target.value,
    });
  };

  return (
    <div>
      <label htmlFor="people">Number of People</label>
      <div>
        <img src={people} alt="number of people" />
        <input
          type="number"
          name="people"
          id="people"
          value={state.people}
          onChange={handleChange}
          onBlur={handleChange}
        />
      </div>
    </div>
  );
};

export default NumOfPeople;
