import React from "react"
import "./ExpenseItem.css"
import Card from "../../UI/Card/Card"

const ExpenseItem = props => {

  const month = props.date.toLocaleString("en-US", {month: "short"});
  const day = props.date.toLocaleString("en-US", {day: "2-digit"});
  const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <div className="expense-item__month">{month}</div>
        <div className="expense-item__year">{year}</div>
        <div className="expense-item__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__amount">$ {props.amount}</div>
      </div>
    </Card>
  )

}

export default ExpenseItem;