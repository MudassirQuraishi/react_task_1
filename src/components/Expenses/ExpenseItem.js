import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(props) {
    return (
        <>
            <Card className={"expense-item"}>
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDetails
                    amount={props.amount}
                    title={props.title}
                    place={props.place}></ExpenseDetails>
            </Card>
        </>
    );
}

export default ExpenseItem;
