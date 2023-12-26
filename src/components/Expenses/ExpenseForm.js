import Card from "../UI/Card";
import InputDiv from "./InputDiv";

const ExpenseForm = () => {
    const submitForm = (e) => {
        e.preventDefault();
        const title = document.getElementById("expense-title").value;
        const amount = document.getElementById("expense-amount").value;
        const date = document.getElementById("expense-date").value;
        console.log(title + " " + amount + " " + date);
    };

    return (
        <Card>
            <form className='expense-form' onSubmit={submitForm}>
                <InputDiv
                    type={"text"}
                    id={"expense-title"}
                    placeholder={"Enter your expense"}
                />
                <InputDiv
                    type={"number"}
                    id={"expense-amount"}
                    placeholder={"Enter your expense amount"}
                />
                <InputDiv
                    type={"date"}
                    id={"expense-date"}
                    placeholder={"Select a date"}
                />
                <button
                    type='submit'
                    id='add-expense-button'
                    className='add-btn'>
                    Add Expense
                </button>
            </form>
        </Card>
    );
};

export default ExpenseForm;
