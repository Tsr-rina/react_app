import React from "react";

// 名前を入力するフォームをコンポーネント化
function NameForm(props){
    const handleTextInput = (e) => {
        // onChangeを実行
        // 親のコンポーネントに渡される
        props.onChangeName(e.target.value);
    };

    return (
        <div className="form">
            {/* handleTextInputメソッドでpropsにセットしたonChangeNameを実行 */}
            <input type="text" value={props.name} onChange={handleTextInput}/>
        </div>
    );
}

export default NameForm;