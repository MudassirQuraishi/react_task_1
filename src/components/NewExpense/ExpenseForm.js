import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [showForm, setShowFormStatus] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    const hideFormHandler = (e) => {
        setShowFormStatus(false);
    };
    const showFormHandler = (e) => {
        setShowFormStatus(true);
    };
    let formContent = (
        <button type='submit' onClick={showFormHandler}>
            Add Expense
        </button>
    );
    if (showForm === true) {
        formContent = (
            <>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            type='number'
                            min='0.01'
                            step='0.01'
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input
                            type='date'
                            min='2019-01-01'
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='reset' on onClick={hideFormHandler}>
                        Cancel
                    </button>
                    <button type='submit'>Add Expense</button>
                </div>
            </>
        );
    } else if (showForm === false) {
        formContent = (
            <button type='submit' onClick={showFormHandler}>
                Add Expense
            </button>
        );
    }

    return <form onSubmit={submitHandler}>{formContent}</form>;
};

export default ExpenseForm;
