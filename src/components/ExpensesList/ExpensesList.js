import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ filteredExpenses }) {
  let expensesContent = <p>No expenses found!</p>;
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">{expensesContent}</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          expenseTitle={expense.title}
          expenseDate={expense.date}
          expenseAmount={expense.amount}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
