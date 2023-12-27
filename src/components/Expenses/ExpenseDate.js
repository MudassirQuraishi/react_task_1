import "./ExpenseDate.css";

function ExpenseDate(props) {
    const date = props.date.split("-");
    const month = date[1];
    const year = date[0];
    const day = date[2];
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year} </div>
            <div className='expense-date__day'> {day}</div>
        </div>
    );
}
export default ExpenseDate;
