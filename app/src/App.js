import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';


// ShoppingListはReactコンポーネントクラス
// ShoppingListはpropsパラメータを受け取りrenderで表示する
// class ShoppingList extends React.Component {
//   render(){
//     return (
//       <div className='shopping-list'>
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function Header(){
  return(
    <div class="header"> 
      <h1>Portfolio Site</h1>
    </div>
  );
}

function Main(props){
  return(
    <div className='work'>
      <h3>{props.theme}</h3>
      <p>{props.exp}</p>
      <p><a href={props.link}>ここから</a></p>
    </div>
  );
}

{/* <div>
<Welcome name="Woo"/>
<Welcome name="Hon"/>
<Welcome name="Book"/>
</div> */}

function App(){
  return(
    <React.Fragment>
    <Header/>
    <Main theme="MyArtSite" exp="自身で描いた絵やデザインした洋服を掲載しているサイトです" link="https://tsr-rina.github.io/myartsite.github.io/"/>
    <Main theme="WebAR" exp="WebARを試してみました.スマホからできます." link="https://tsr-rina.github.io/webar_maker/"/>
    <Main theme="WebAPI Small Art Museum" exp="自分で絵画のWebAPIを作成し、絵画の解説を閲覧できるサービスを作成しました。解説等は全てWikipediaから引用しています" link="https://webapi-flask-app.vercel.app"/>
    </React.Fragment>
  );
}
export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
