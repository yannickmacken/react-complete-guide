import { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    // JavaScript to determine content of component goes here

    // React hook. Must be called inside component function. Is executed only at initial loading of app.
    // Returns a variable to call and a function to change variable.
    const [title, setTitle] = useState(props.title);

    // This handler updates the title variable. Each time it is called, this component is rerendered.
    function clickHandler() {
        setTitle("Updated!");
    };

    // HTML-like structure of component (JSX), filled with calculated values.
    // This returned HTML should always have one root element (default is div)
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{"$ "+parseInt(props.amount)}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;