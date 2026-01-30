import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItemList(props) {
  const btns = props;
  const [btn,useBtn] = useState(btns);


  return (
    <div className="expense-item">
      <ExpenseDate date={btn.date} />
     
      <div className="expense-item__description">
        <h2 className="expense-item h2">{btn.title}</h2>
        <div className="expense-item__price">{btn.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItemList;
