import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expenses = props => {
  const expenses = props.expenses.map( item => {
    return (
      <ExpenseItem 
        key={item.id} 
        title={item.title} 
        amount={item.amount} 
        date={item.date} />
    );
  });

  return (
    <Card className="expenses">
      {expenses}
    </Card>
  );
}

export default Expenses;