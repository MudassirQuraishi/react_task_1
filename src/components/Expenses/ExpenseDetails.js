import { useState } from "react";
import "./ExpenseItem.css";
function ExpenseDetails(props) {
    const title = props.title;
    const place = props.place;

    const [amount, setAmount] = useState(props.amount);
    const incrementAmount = (e) => {
        setAmount("$100");
    };
    return (
        <>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div>{place}</div>
                <div className='expense-item__price'>{amount}</div>
                <button onClick={incrementAmount}>Update Expense</button>
            </div>
        </>
    );
}

export default ExpenseDetails;
