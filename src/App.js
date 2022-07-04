import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "267.60",
      date: new Date(2022, 2, 23),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "294.67",
      date: new Date(2022, 7, 28),
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

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
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
