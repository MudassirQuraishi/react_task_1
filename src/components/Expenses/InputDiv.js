import { useState } from "react";
import "./InputDiv.css";
const InputDiv = () => {
    const [enteredTitle, setTitle] = useState();
    const [enteredAmount, setAmount] = useState();
    const [enteredDate, setDate] = useState();
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const changeAmount = (e) => {
        setAmount(e.target.value);
    };
    const changeDate = (e) => {
        setDate(e.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault();
        console.log(enteredTitle + " " + enteredAmount + " " + enteredDate);
    };
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type={"text"}
                        id={"expense-title"}
                        placeholder={"Enter your expense"}
                        onChange={changeTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type={"number"}
                        id={"expense-amount"}
                        placeholder={"Enter your expense amount"}
                        onChange={changeAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type={"date"}
                        id={"expense-date"}
                        placeholder={"Select a date"}
                        onChange={changeDate}
                    />
                </div>
                <div className='new-expense__actions'>
                    <button
                        type='submit'
                        id='add-expense-button'
                        className='add-btn'
                        onSubmit={submitForm}>
                        Add Expense
                    </button>
                </div>
            </div>
        </form>
    );
};
export default InputDiv;
