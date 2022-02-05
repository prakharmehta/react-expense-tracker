import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

import "./Expenses.css";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterDateHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterDateSelect={filterDateHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
