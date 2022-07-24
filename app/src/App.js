import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoFrom from './components/TodoForm';
import Message from './components/Message';
import NameForm from './components/NameForm';
import Sample from './components/sample';
import Fruits_select from './components/Fruits_select';
import LeftMemo from './components/LeftMemo';
import ShowText from './components/ShowText';

function App() {
  // const[状態の変数, 状態を変更するための関数] = useState(状態の初期値);
  const [todos, setTools] = useState([
    {
      ID:1,
      Content: 'hoge',
      Done: true,
      // toISOStringはUTCの文字列(ISO8601形式)に変換する
      CreateAt: (new Date()).toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    },
  ]);
  const handleUpdate = data => {
    const now = (new Date()).toISOString();
    data.UpdatedAt = now;
    setTools(todos.map(item => {
      if (item.ID === data.ID){
        return data;
      }
      return item;
    }))
  }
  const handleCreate = data => {
    data.ID = Date();
    const now = (new Date()).toISOString();
    data.CreateAt = now;
    data.UpdatedAt = now;
    setTools([...todos, data]);
  };

  const handelDelete = id => {
    // IDが一致する項目のindexを取得
    const index = todos.findIndex(item => item.ID === id);
    if (index >= 0){
      // new list
      const newList = [...todos];
      // delete element from list
      newList.splice(index, 1);
      // stateに反映
      setTools(newList);
    }
  };

  const [memo, SetMemo] = useState("");
  const handleMemoInput = (e) => {
    SetMemo(e.target.value);
  }
  
  return (
    <div className='App'>
      <div className='App-header'>
        <span>React Try However</span>
      </div>
      <TodoFrom onSave={handleCreate}/>
      {/* todosの中のものをitemを使って表示 item.IDとか */}
      {todos.map(item => <Todo key={item.ID} {...item} onSave={handleUpdate} onDelete={handelDelete}/>)}
      <Sample/>
      <Fruits_select/>
      
      <div className='memo'>
        <LeftMemo value={memo} onChangeMemo={value => SetMemo(value)}/>
        <div className='RightMemo'>
          <ShowText memo={memo}/>
        </div>     
      </div>
    </div>
  );
}

export default App;
