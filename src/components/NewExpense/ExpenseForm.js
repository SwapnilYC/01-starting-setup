import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // We can use multiple useState hook in one single component
  const [enteredTitle, setEnteredTitle] = useState(''); // initially all input fields are empty/empty string
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // But if all the input are from the same form element then we can group them using object as follows
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value) // e.target.value gives the value of string present in input field
    // following is not the correct way, although for most of the instances it will give correct output but not always
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // })
    // This is the correct way when yout current state is depending on the previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value }
    // })
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseForm(expenseData); // here we are executing function that is defined in newExpense.js (transferring data from child to parent)
    // To empty/reset the input fields
    setEnteredTitle(''); // entered title becomes empty string
    setEnteredAmount('');
    setEnteredDate('');
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title:</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className='new-expense__control'>
            <label>Amount:</label>
            <input type="number" value={enteredAmount} min="0.5" step={.5} onChange={amountChangeHandler}></input>
          </div>
          <div className='new-expense__control'>
            <label>Date:</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler}></input>
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;