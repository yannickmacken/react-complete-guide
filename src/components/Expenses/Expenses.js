import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {

    // Define selected year as state on expenses component. Default state has to be IN single quotes!
    const [year, setYear] = useState('2020');

    // Method to get selected year, runs in expensesfilter
    function filterChangeHandler(enteredExpensesFilterData) {
        setYear(enteredExpensesFilterData);
    }

    // Print selected year in expenses component
    console.log(year)
    console.log("expenses on Expenses component", props.items)

    // Get item filtered by year
    const filteredExpenses = props.items.filter(expense => expense.date.getUTCFullYear() == year);

    return (
        // Create controlled component (ExpensesFilter). State is passed down, and handler function is passed down,
        // filled, and passed back up. Expenses are listed through list comprehension.
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map(expense => 
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />)}
        </Card>
    );
}

export default Expenses;