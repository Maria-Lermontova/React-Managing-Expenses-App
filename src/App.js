import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 1, 28)
    },
    {
      id: 'e2',
      title: 'New table',
      amount: 98.56,
      date: new Date (2022, 2, 16)
    },
    {
      id: 'e3',
      title: 'Toilet paper',
      amount: 8.23,
      date: new Date (2022, 3, 11)
    }
  ]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
