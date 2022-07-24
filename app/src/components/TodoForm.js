import React, { useState } from "react";
import './Todo.css';

function TodoForm(props = {Done: false, Content: '', onSave: () => {} }){

    const [done, setDone ] = useState(!!props.Done);
    // props.contentか何も入っていないか
    const [content, setContent] = useState(props.Content || '');

    const handleSave = () => {
        const data = {
            ...props,
            Done: done,
            // contentに値が入っていればそれが出力される
            Content: content,
        };
        
        props.onSave(data);
        setDone(false);
        setContent('');
    };
    return (
        <div className="todo">
            <div className="check">
                <input type='checkbox' checked={done} onChange={e => setDone(e.target.checked)}/>
            </div>
            <div className="body">
                <textarea value={content} onChange={e => setContent(e.target.value)}/>
            </div>
            <button className="btn" onClick={handleSave}>Save</button>
            {/* IDがあるときキャンセルボタンを表示 */}
            {props.ID && (
                <button className="btn" onClick={props.onCancel}>Cancel</button>
            )}
        </div>
    );
}

export default TodoForm;