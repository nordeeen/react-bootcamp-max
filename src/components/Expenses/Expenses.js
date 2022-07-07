import React, { useState } from "react";

import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // fitur filter tahun
  const filterYearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesList items={filterYearExpenses} />
        {/* {expensesContent} */}
        {/* {filterYearExpenses.length === 0 && <h2>Expenses Not Found</h2>}
        {filterYearExpenses.length > 0 &&
          filterYearExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </>
  );
};

export default Expenses;
