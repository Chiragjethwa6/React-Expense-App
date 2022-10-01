import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const  App = () => {
  const Dummy_Expenses = [
    {
      id : 'e1',
      title : "Car Insurance",
      amount : 294.67,
      date : new Date(2022, 9, 28)
    },
    {
      id : 'e2',
      title : "Car Break",
      amount : 24.67,
      date : new Date(2022, 9, 28)
    },
    {
      id : 'e3',
      title : "Car Tyre",
      amount : 94.67,
      date : new Date(2022, 9, 28)
    },
  ]
  const [expenses, setExpenses] = useState(Dummy_Expenses);


  const addExpensehandler = expense => {
    setExpenses((prev_expenses) => [expense, ...prev_expenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses 
        expenses = {expenses}
       />
    </div>
  );
}

export default App;
