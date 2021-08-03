import React from "react";
// eslint-disable-next-line import/no-unresolved
import iconDollar from "url:../resources/icon-dollar.svg";
import { useAppState } from "../App";
import InputText from "./InputText";

const Bill = () => {
  const [state, dispatch] = useAppState();
  const { bill } = state;
  console.log("RENDER BILL");

  return (
    <div>
      <InputText
        className="input-grey"
        icon={iconDollar}
        value={bill}
        id="Bill"
        onChange={({ target }) =>
          dispatch({
            type: "INPUT_BILL",
            bill: target.value,
          })
        }
      />
    </div>
  );
};

export default Bill;
