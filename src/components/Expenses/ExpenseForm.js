import "./ExpenseForm.css";
import InputDiv from "./InputDiv";

const ExpenseForm = (props) => {
    const setFormDetails = (formData) => {
        const expneses = {
            ...formData,
            id: Math.floor(Math.random() * 101),
        };
        props.onNewExpense(expneses);
        console.log(expneses);
    };
    return (
        <div className='new-expense'>
            <InputDiv onFromSubmit={setFormDetails} />
        </div>
    );
};

export default ExpenseForm;
