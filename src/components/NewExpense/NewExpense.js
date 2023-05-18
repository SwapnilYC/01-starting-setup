import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseForm = (enteredExpenseData) => {
    console.log('Inside NewExpense.js');
    console.log(enteredExpenseData);
    props.onAddExpense(enteredExpenseData) // here we are executing function that is defined in App.js (transferring data from child to parent)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseForm}></ExpenseForm>
    </div>
  );
}

export default NewExpense;