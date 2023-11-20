// src/App.jsx
import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"


function App() {
  
  
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <div className="presentation">
        <div className='left-div'>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular fontend library, and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
        <div className='right-div'></div>
      </div>
      <div className="icons-box">
      <Card src={icon1} text1="Declarative" text2="React maes it painless to create interactive UIs." ></Card>
      <Card src={icon2} text1="Components" text2="Build encapsulated components that manage their state." ></Card>
      <Card src={icon3} text1="Single-Way" text2="A set of immutable values are passed to the component's." ></Card>
      <Card src={icon4} text1="JSX" text2="Statically-typed, designed to run on modern browsers." ></Card>
      </div>
    </div>
   
  );
}

export default App;