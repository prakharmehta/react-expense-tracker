import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    //whenever you update state and you depend on the previous state, in this case a single state approach for 3 states

    //   const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    //   });

    //you should not do it like this

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // but you should use an alternative form of this state updating function

    // setUserInput((previousState) => {
    //     return {...previousState, enteredTitle: event.target.value}
    // })

    //     Now why should we do it like this instead of like this?
    // In many cases, both will work fine,
    // but keep in mind that I mentioned
    // that Reacts schedules state updates,
    // it doesn't perform them instantly.
    // And therefore, theoretically,
    // if you schedule a lot of state updates at the same time,
    // you could be depending on an outdated
    // or incorrect state snapshot
    // if you use this approach.

    //     If you use this approach, React will guarantee
    // that the state snapshot it gives you here
    // in this inner function,
    // will always be the latest state snapshot,
    // keeping all scheduled state updates in mind.
    // So this is the safer way
    // to ensure that you always operate
    // on the latest state snapshot.

    // So you should use this function syntax here
    // whenever your state update depends on the previous state.

    //the original approach
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            min={"0.01"}
            step={"0.01"}
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            min={"2019-01-01"}
            max={"2022-12-31"}
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
