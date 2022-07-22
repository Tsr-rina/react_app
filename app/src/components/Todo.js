import React from "react";
import "./Todo.css";

function Todo(props) {
    return (
        <div className="todo">
            <div className="check">
                {props.Done && <span>✔︎</span>}
            </div>
            <div className="body">
                <div className="header">
                    <span className="date">CreateAt: {props.CreateAt} </span>
                    <span className="date">UpdateAt: {props.UpdateAt} </span>
                </div>

                <div className="content">{props.Content}</div>
            </div>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
        </div>
    );
}

export default Todo;