import React from "react";
import "./Card.css";
import ExpenseDate from "../ExpenseDate";

function Card(props) {
    const classes = "card" + props.className;

    //return <div className={classes}> {props.children} </div>;

    return React.createElement(
        "div",
        {},
        React.createElement(
            "ExpenseDate",
            { props },
            React.createElement(
                "div",
                {},
                React.createElement("h1", {}, "Expense1"),
                React.createElement("h1", {}, "Expense1")
            )
        )
    );
}
