const appReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "INPUT_BILL":
      return { ...state, bill: action.bill };
    case "INPUT_TIP":
      return { ...state, tip: action.tip };
    case "INPUT_PEOPLE":
      return { ...state, people: action.people };
    case "SHOW_RESULT":
      return {
        ...state,
        tipAmount: action.tipAmount,
        total: action.total,
      };
    case "RESET":
      return action.state;
    default:
      return state;
  }
};

export default appReducer;
