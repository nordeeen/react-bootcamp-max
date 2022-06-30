import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
