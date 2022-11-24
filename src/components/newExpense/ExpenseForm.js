import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


//   FOR MULTIPLE STATES
//   const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate:'',
//   });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // OTHER APPROACH

    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value

    // })

    // ANOTHER APPROUCH
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         enteredTitle: e.target.value,
    //     };
    // });
    console.log(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    
        // OTHER APPROACH
    
        // setUserInput({
        //    ...userInput,
        //     enteredAmount: e.target.value
    
        // }))
    // OTHER APPROACH

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: e.target.value

    // })

    // ANOTHER APPROUCH
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         enteredAmount: e.target.value,
    //     };
    // });
    console.log(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
    // OTHER APPROACH

    // setUserInput({
    //     ...userInput,
    //     enteredDate: e.target.value

    // })

    // ANOTHER APPROUCH
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         enteredDate: e.target.value,
    //     };
    // });
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }


    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="num"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
