import React from "react";

function ShowText(props) {
    return (
        <textarea value={props.memo}/>
    );
}

export default ShowText;