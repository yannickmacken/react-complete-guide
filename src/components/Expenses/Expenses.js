import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {

    const expenses = props.expenses;

    // Define selected year as state on expenses component. Default state has to be IN single quotes!
    const [year, setYear] = useState('2020');

    // Method to get selected year, runs in expensesfilter
    function filterChangeHandler(enteredExpensesFilterData) {
        setYear(enteredExpensesFilterData);
    }

    // Print selected year in expenses component
    console.log(year)

    return (
        // Create controlled component (ExpensesFilter). State is passed down, and handler function is passed down,
        // filled, and passed back up.
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        </Card>
    );
}

export default Expenses;