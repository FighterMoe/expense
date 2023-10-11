import React, {useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")

  const titleChangeHandler = event => setTitle(event.target.value)
  const amountChangeHandler = event => setAmount(event.target.value)
  const dateChangeHandler = event => setDate(event.target.value)

  const expenseSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }

    props.onAddExpense(expenseData)

    setTitle("")
    setAmount("")
    setDate("")

    props.onCloseForm()
  }

  return (
    <form onSubmit={expenseSubmitHandler}>
      <div className="form-control">
        <div className="control">
          <label>Expense</label>
          <input type="text" 
            onChange={titleChangeHandler}
            value={title}
          />
        </div>


        <div className="control">
          <label>Amount</label>
          <input type="number" max="10000" step="0.01" 
            onChange={amountChangeHandler}
            value={amount}
            />
        </div>

        <div className="control">
          <label>Date</label>
          <input type="date" min="2000-1-1" max="2024-12-30"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>

      <div className="control-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenseForm;