import { useState } from "react";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";

function App() {
    const [expenses, setExpenses] = useState([]);
    const addNewExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };
    return (
        <>
            <ExpenseForm onNewExpense={addNewExpense}></ExpenseForm>
            <div>
                <ExpensesFilter></ExpensesFilter>
                {expenses.length > 0 ? (
                    expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            place={expense.locationOfExpenditure}
                        />
                    ))
                ) : (
                    <p>No expenses found!</p>
                )}
            </div>
        </>
    );
}

export default App;
