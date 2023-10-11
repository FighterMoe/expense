import React, {useState} from "react"
import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses/Expenses"
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter"


const App = () => {
  const [isFormShow, setIsFormShow] = useState(false)
  
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "new Car",
      amount: 250,
      date: new Date("2023-8-9")
    },
    {
      id: "e2",
      title: "how to win",
      amount: 12,
      date: new Date("2020-6-10")
    },
    {
      id: "e3",
      title: "house",
      amount: 500,
      date: new Date("2021-5-28")
    },

    {
      id: "e2",
      title: "house",
      amount: 500,
      date: new Date("2022-5-28")
    },
  ])

  const addExpenseHandler = expense => {
    setExpenses( prevExpenses => {
      return (
        [expense, ...prevExpenses]
      )
    })
  }

  const showExpenseFormHandler = () => {
    setIsFormShow(!isFormShow)
  }

  const [filteredExpenses, setFilteredExpenses] = useState([])

  const expenseFilterHandler = (selectedYear) => {
    const filtered = expenses.filter(expense => {
      return expense.date.getFullYear() === selectedYear
    })
    
    setFilteredExpenses([...filtered])
  }

  return (
    <div>
      <NewExpense 
        onAddNewExpense={addExpenseHandler} 
        doesFormShow={isFormShow}
        onShowForm={showExpenseFormHandler}
      />

      <ExpenseFilter onFilter={expenseFilterHandler} />

      <Expenses expenses={filteredExpenses} />
    </div>
  );
}

export default App;