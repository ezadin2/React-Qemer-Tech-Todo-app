import { useState } from "react";
import ExpenseItemList from "./component/ExpenseItemList.jsx";
import "./App.css";
const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  

  return (
    <div className="test">
      {DUMMY_EXPENSES.map((index) => (
      
        <ExpenseItemList
          key={index.id}
          date={index.date}
          title={index.title}
          price={index.amount}
        />
      ))}
    </div>
  );
};

export default App;
