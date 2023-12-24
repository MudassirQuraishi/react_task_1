import "./ExpenseItem.css";
function ExpenseDetails(props) {
    const amount = props.amount;
    const title = props.title;
    const place = props.place;

    const deleteExpense = (e) => {
        const element = e.target.parentElement.parentElement;
        const parent = element.parentElement;
        parent.removeChild(element);
    };
    return (
        <>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div>{place}</div>
                <div className='expense-item__price'>{amount}</div>
                <button onClick={deleteExpense}>Delete Expense</button>
            </div>
        </>
    );
}

export default ExpenseDetails;
