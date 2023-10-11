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

  let expenseForm = (<div className="new-expense__btn-container">
                      <button 
                        onClick={props.onShowForm} 
                        className="new-expense__btn">
                          Expeses Form
                      </button>
                    </div>)

  if(props.doesFormShow) {
    expenseForm = <ExpenseForm onAddExpense={addExpenseHandler} onCloseForm={props.onShowForm} />
  }

  return (
    <Card className="new-expense">
      {expenseForm}
    </Card>
  );
}

export default NewExpense;