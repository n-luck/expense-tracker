import React from "react";
import "./ExpenseItem.styles.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  return (
    <li className="expense-list-li">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">£{props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
