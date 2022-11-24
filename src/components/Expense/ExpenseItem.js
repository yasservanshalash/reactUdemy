import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    
    const clickHandler = () => {
        setTitle(title + " 1")
        console.log(title)
    }
  return (
    <Card className="expense-item card">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
