import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "267.60",
    date: new Date(2021, 2, 23),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2020, 7, 28),
  },
  {
    id: "e3",
    title: "Buy Ayam Geprek",
    amount: "10.000",
    date: new Date(2022, 5, 11),
  },
  {
    id: "e4",
    title: "Buy Smartphone",
    amount: "1294.62",
    date: new Date(2022, 3, 21),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
