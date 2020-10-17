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
      <div className="column sidebar-menu">

        {/*
        <div id="toggle">
          <div class="list"></div>
        </div>

        <ul>
          <li class="Home"><span>DASHBOARD</span></li>
          <li class="Home"><span>TASKS</span></li>
          <li class="Home"><span>SETTINGS</span></li>
          <li class="Home"><span>PROFILE</span></li>
        </ul>
        */}

      </div>
      <div className="column middle">
        <h2>Either main timeline view or calendar</h2>
      </div>
      <div className="column right">
        <h2>Either side calendar, to-do list, or timeline view</h2>
      </div>

    {/*
      <div className="header">
        <h1>SIMP</h1>
        <h3>{dateTimeDisplay}</h3>
        <Nav className="nav" />
      </div>
      {/* <h2>Counter {count}</h2>
      <button onClick={increment}>Click</button>
      <h1 className={toggle ? "active" : ""}>Toggle</h1>
      <button onClick={toggler}>Toggle</button>
      <Calendar user={name} />
      <DayView />
    */}
    </div>
  );
}

export default App;
