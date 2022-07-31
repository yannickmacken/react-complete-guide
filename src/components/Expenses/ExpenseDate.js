import "./ExpenseDate.css"

function ExpenseDate(props) {

    // Calculate year month and day    
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});

    // HTML-like structure of component (JSX), filled with calculated values.
    // This returned HTML should always have one root element (div)
    return (
        <div className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>                
        </div>
    );
}

export default ExpenseDate;