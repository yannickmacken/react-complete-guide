import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    // JavaScript to determine content of component goes here

    // HTML-like structure of component (JSX), filled with calculated values.
    // This returned HTML should always have one root element (div)
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{"$ "+parseInt(props.amount)}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;