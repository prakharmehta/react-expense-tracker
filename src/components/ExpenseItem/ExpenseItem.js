import React from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ expenseDate, expenseTitle, expenseAmount }) {
  //hooks only inside the component function; not outside the component function neither inside any hook
  // const [title, setTitle] = useState(expenseTitle);

  // const changeTitleHandler = () => {
  //   setTitle("Updated!!!");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
        {/* <button onClick={changeTitleHandler}>Change Title!</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
