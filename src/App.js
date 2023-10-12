import React, {useState} from "react"
import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses/Expenses"
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter"
import ExpenseChart from "./components/Expenses/ExpenseChart/ExpenseChart"


const App = () => {
  const [isFormShow, setIsFormShow] = useState(false)
  const [selectedYear, setSelectedYear] = useState("2019")
  
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
      id: "e4",
      title: "house",
      amount: 500,
      date: new Date("2023-1-28")
    },

    {
      id: "e5",
      title: "how to win",
      amount: 800,
      date: new Date("2023-2-16")
    },
    {
      id: "e6",
      title: "house",
      amount: 600,
      date: new Date("2023-6-12")
    },
    {
      id: "e7",
      title: "house",
      amount: 120,
      date: new Date("2022-8-12")
    },
    {
      id: "e8",
      title: "house",
      amount: 220,
      date: new Date("2022-5-8")
    }
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

  const yearSelectorHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  }

  const filteredExpenses = expenses.filter( expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
      <NewExpense 
        onAddNewExpense={addExpenseHandler} 
        doesFormShow={isFormShow}
        onShowForm={showExpenseFormHandler}
      />

      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseFilter onFilter={yearSelectorHandler} selectedYear={selectedYear} />

      <Expenses expenses={filteredExpenses} />
    </div>
  );
}

export default App;