import React from "react"
import "./ExpenseFilter.css"

const ExpenseFilter = props => {
  const selectHandler = event => {
    const selectedValue = Number(event.target.value);
    props.onFilter(selectedValue)
  }

  return (
    <div className="expense-filter">
      <select className="expense-filter__select" onChange={selectHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  )
}

export default ExpenseFilter