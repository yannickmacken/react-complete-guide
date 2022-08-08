import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    const filteredExpenses = props.items;

    // Return string if no expenses
    if (filteredExpenses.length == 0) {
        return (<h2 className="expenses-list__fallback">No expenses found.</h2>)
    };

    // Else return expense items for expense in expenses list
    return (
        <ul className="expenses-list">
            {filteredExpenses.map(expense => 
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />)}
        </ul>            
    )
};

export default ExpensesList;
