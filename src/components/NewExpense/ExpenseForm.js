import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {

    // Declare individual states for each inputfield of form.
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // Declare handlers individually for each state. Could also be combined in one state.
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    };
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    };
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        // Define output data object from form.
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // Run function on parent component to update expense data.
        props.onSaveExpenseData(expenseData);

        // Reset all form inputfields to empty strings.
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        ;
    };

    // In this return statement, a form is returned.
    // Each change to each inputfield activates a handler. This handler sets the usestates of the respective variables.
    // The usestate is also reflected back to the inputfield, to make it possible to wipe the fields after submitting.
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/> 
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step ="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;