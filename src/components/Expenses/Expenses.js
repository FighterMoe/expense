import React from "react"
import Card from "../UI/Card/Card"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem/ExpenseItem"

const Expenses = (props) => {
  let expenses = <p>No Expense found.</p>

  if(props.expenses) {
    expenses = props.expenses.map(expense => {
      return <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={new Date(expense.date)}/>
    })
  }

  return (
    <Card className="expenses">
      {expenses}
    </Card>
  )
}

export default Expenses;