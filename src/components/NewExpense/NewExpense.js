import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {

    // Define new state to determine whether new expense button is clicked
    const [isEditing, setIsEditing] = useState(false);

    // Define function to run when new expense button is clicked
    function editingHandler() {
        setIsEditing(true)
    };

    // Define function to run when cancel is clicked on form
    function cancelExpenseHandler() {
        setIsEditing(false)
    };

    // Define function to run when expense is submitted
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // Send new expense data to parent component.
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };    

    // Return button or form depending on state of new expense
    return (
        <div className="new-expense">
            {!isEditing && <button type="submit" onClick={editingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseHandler}/>}
        </div>
    );
};

export default NewExpense;