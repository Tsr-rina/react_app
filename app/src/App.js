import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoFrom from './components/TodoForm';
import Message from './components/Message';
import NameForm from './components/NameForm';

function App() {
  const [todos, setTools] = useState([
    {
      ID:1,
      Content: 'hoge',
      Done: true,
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
  
  return (
    <div className='App'>
      <TodoFrom onSave={handleCreate}/>
      {todos.map(item => <Todo key={item.ID} {...item} onSave={handleUpdate} onDelete={handelDelete}/>)}
    </div>
  );
}

export default App;
