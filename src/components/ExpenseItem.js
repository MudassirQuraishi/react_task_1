import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
    return (
        <>
            <div className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDetails
                    amount={props.amount}
                    title={props.title}
                    place={props.place}></ExpenseDetails>
            </div>
        </>
    );
}

export default ExpenseItem;
