import Heading from "./components/Heading";
import List from "./components/List";
import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
            locationOfExpenditure: "Mall",
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
            locationOfExpenditure: "Electronics Shop",
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
            locationOfExpenditure: "Car Showroom",
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
            locationOfExpenditure: "IKEA",
        },
    ];
    return (
        <div>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    place={expense.locationOfExpenditure}
                />
            ))}
            {/* <Heading></Heading>
            <List></List> */}
        </div>
    );
}

export default App;
