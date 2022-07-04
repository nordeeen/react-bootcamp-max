import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const TitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // console.log(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    // console.log(userInput);
  };

  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // console.log(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  };

  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // console.log(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={TitleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2025-12-30"
              value={enteredDate}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
