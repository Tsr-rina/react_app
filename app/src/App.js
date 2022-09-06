import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ShoppingListはReactコンポーネントクラス
// ShoppingListはpropsパラメータを受け取りrenderで表示する
class ShoppingList extends React.Component {
  render(){
    return (
      <div className='shopping-list'>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App(){
  return(
    <div>
      <Welcome name="Woo"/>
      <Welcome name="Hon"/>
      <Welcome name="Book"/>
    </div>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
