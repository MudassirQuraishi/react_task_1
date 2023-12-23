import "./ExpenseItem.css";
function ExpenseDetails(props) {
    const amount = props.amount;
    const title = props.title;
    const place = props.place;
    return (
        <>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div>{place}</div>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </>
    );
}

export default ExpenseDetails;
