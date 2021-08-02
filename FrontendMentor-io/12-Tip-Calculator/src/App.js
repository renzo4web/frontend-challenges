import React, { useReducer, useEffect, useContext, createContext } from "react";

import appReducer from "./appReducer";
import Form from "./components/Form";
import Results from "./components/Results";
import { calculateTip } from "./utils/calculateTip";

const initialState = {
  bill: "",
  tip: "",
  people: "",
  total: "",
  tipAmount: "",
};

const Context = createContext();

export function useAppState() {
  return useContext(Context);
}
const App = () => {
  const value = useReducer(appReducer, initialState);

  const [{ bill, tip, people, total, tipAmount }, dispatch] = value;

  useEffect(() => {
    const { personTotal, tipAmountPerson } = calculateTip(bill, tip, people);

    dispatch({
      type: "SHOW_RESULT",
      total: personTotal,
      tipAmount: tipAmountPerson,
    });
  }, [bill, tip, people, dispatch]);

  return (
    <Context.Provider value={value}>
      <main className="calculator">
        <Form />
        <Results tip={tipAmount} total={total} />
      </main>
    </Context.Provider>
  );
};

export default App;
