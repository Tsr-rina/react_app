import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "./Todo.css";

function Todo(props) {
    const [edit, setEdit] = useState(false);
    // TodoFormに引き渡す更新メソッド
    const handleUpdate = data => {
        props.onSave(data);
        // 編集モードfinish
        setEdit(false); 
    }
    if (edit) {
        return(
            <TodoForm {...props} 
            onSave={handleUpdate}
            onCancel={()=> setEdit(false)}
            />
        );
    }
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
            <button className="btn" onClick={() => setEdit(true)}>Edit</button>
            <button className="btn" onClick={() => props.onDelete(props.ID)}>Delete</button>
        </div>
    );
}

export default Todo;