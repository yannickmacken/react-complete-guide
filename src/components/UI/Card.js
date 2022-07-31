import "./Card.css";

function Card(props) {

    // Add classname from childclass to classnames to inherit styling css
    const classes = "card " + props.className;

    return (<div className={classes}>{props.children}</div>);
}

export default Card;