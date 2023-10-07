import "./ExpenseDate.css";

const ExpenseDate = props => {
  const month = props.date.toLocaleString("en-US", {month: "short"});
  const year = props.date.toLocaleString("en-US", {year: "numeric"});
  const day = props.date.toLocaleString("en-US", {day: "numeric"});
  
  return (
    <div className="expense-item__date">
      <div className="expense-item__month">{month}</div>
      <div className="expense-item__year">{year}</div>
      <div className="expense-item__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;