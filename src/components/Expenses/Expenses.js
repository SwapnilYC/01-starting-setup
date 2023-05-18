import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2021');

  const filterYear = (newEnteredYear) => {
    console.log('Inside Expense.js');
    setSelectedYear(newEnteredYear);
    console.log('selected year is: ' + newEnteredYear);
  }


  return (
    <Card className="expenses" >
      <ExpensesFilter selected={selectedYear} onYearChange={filterYear}></ExpensesFilter>
      {props.item.map(expenseItem => (
        <ExpenseItem title={expenseItem.title} price={expenseItem.amount} date={expenseItem.date} />
      ))}
    </Card >
  );
}

export default Expenses;