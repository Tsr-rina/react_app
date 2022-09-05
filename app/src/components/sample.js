import React, {useState} from "react";
import LeftMemo from "./LeftMemo";

import Message from "./Message";

function Sample(){
    const [name, setName] = useState("");
    // setNameメソッドにテキストボックスの値を渡す
    // const handleTextInput = (e) => {
    //     setName(e.target.value);
    // };

    return (
        <div className="App">
            <header className="App-header">
                {/* <div className="form"> */}
                    {/* テキストボックス内の値が変わるとhandleTextInputメソッドが呼ばれる */}
                    {/* <input type="text" onChange={handleTextInput}/> */}
                {/* </div> */}
            </header>
            {/* onChangeで受け取ったvalueをstateにセットする */}
            <LeftMemo onChangeName={value => setName(value)}/>
            {/* 変更された値を表示 */}
            <Message name={name}/>
        </div>
    )

}
export default Sample;