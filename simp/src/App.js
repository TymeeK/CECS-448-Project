import React,{useState} from "react";
import "./App.css";
import Nav from "./components/Nav";
import Calendar from "./components/Calendar";
import DayView from "./components/DayView";
import InputForm from "./components/InputForm";
import moment from "moment";


function App(){
  // Write Javascript here, functions, etc.
  // TODO: Updating time each minute programmatically 
  const currentDate = moment().format("MM/DD/YYYY");
  const currentTime = moment().format("h:mm a");
  const dateTimeDisplay = moment().format("MMMM Do YYYY, h:mm:ss a");
  const state = "";

  
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }

  const toggler = () => {
    setToggle(!toggle);
  }

  const inputName = (username) => {
    setName(username.onChange);
  }

  
  return(
    <div className="home">
      <div className="header">
        <h1>SIMP</h1>
        <h3>{dateTimeDisplay}</h3>
      
      </div>
      {/* <h2>Counter {count}</h2>
      <button onClick={increment}>Click</button>

      <h1 className={toggle ? "active" : ""}>Toggle</h1>
      <button onClick={toggler}>Toggle</button> */}
      <Nav className="nav" />
      <Calendar user={name} />
      <DayView />
    </div>
      

  );
}

export default App;
