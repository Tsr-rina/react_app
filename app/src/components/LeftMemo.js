import React from 'react';

function LeftMemo(props){
    const handleMemoInput = (e) => {
        props.onChangeMemo(e.target.value);
    };
    return (
        <div className='LeftMemo'>
            <textarea value={props.memo} onChange={handleMemoInput}/>
        </div>
    )
}
export default LeftMemo;