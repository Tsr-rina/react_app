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
  const handleCreate = data => {
    data.ID = Date();
    const now = (new Date()).toISOString();
    data.CreateAt = now;
    data.UpdatedAt = now;
    setTools([...todos, data]);
  };
  return (
    <div className='App'>
      <TodoFrom onSave={handleCreate}/>
      {todos.map(item => <Todo key={item.ID} {...item}/>)}
    </div>
  );
}

export default App;
