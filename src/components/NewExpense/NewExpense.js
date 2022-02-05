import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  let newExpenseContent = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  if (isEditing === true) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelEditingHandler}
      />
    );
  }
  return <div className="new-expense">{newExpenseContent}</div>;
}

export default NewExpense;
