export const calculateTip = (bill = 0, tip = 0, people = 0) => {
  if (!bill || !tip || !people) {
    return {
      personTotal: "",
      tipAmountPerson: "",
    };
  }

  bill = Number(bill);
  tip = Number(tip);
  people = Number(people);

  const tipTotal = (tip * bill) / 100;
  const personTotal = (bill + tipTotal) / people;
  const tipAmountPerson = tipTotal / people;

  return {
    personTotal: personTotal.toFixed(2),
    tipAmountPerson: tipAmountPerson.toFixed(2),
  };
};
