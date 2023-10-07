import "./ExpenseItem.css"
import ExpenseDate from "../ExpenseDate/ExpneseDate"

const ExpenseItem = props => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2 className="expense-item__title">{props.title}</h2>
        <div className="expense-item__amount">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;