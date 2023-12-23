import "./ExpenseItem.css";
function ExpenseItem() {
    const expenseDate = new Date(2023, 11, 26);
    const expenseTitle = "Car Insurance";
    const expensePrice = 7000;
    const locationOfExpenditure = "Theater";
    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
            <div className='expense-item__description'>
                <h2> {expenseTitle} </h2>
                <div>{locationOfExpenditure} </div>
                <div className='expense-item__price'> {expensePrice} </div>
            </div>
        </div>
    );
}
export default ExpenseItem;
