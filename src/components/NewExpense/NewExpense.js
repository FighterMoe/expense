import React from "react"
import "./NewExpense.css";
import Card from "../UI/Card/Card";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {

  const addExpenseHandler = expense => {
    const newExpense = {
      id: Math.random().toString(),
      ...expense
    }
    
    props.onAddNewExpense(newExpense)
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </Card>
  );
}

export default NewExpense;