import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/molecules/Navbar/Navbar";
// import UserProfileCard from './components/UserProfileCard';
// import ListComponent from './components/ListComponent';
// import Counter from './components/counter';
// import HoverEvent from "./components/StateEvents";
// import Car from "./components/CarProps";
// import CarLogo from "./components/CarProps";
// import { Car, CarLogo, CarData, CarArrays } from "./components/CarProps";
// import { Loader, Content } from "./components/ConditionalRendering";
// import UseEffect from "./components/UseEffectHook";
// import UseState from "./components/UseState";
// import DisplayResults from "./hooks/UseContext"

import "./index.css";
import "./assets/styles/main.css"
import "./components/molecules/Navbar/Navbar.css"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-page">
        <h2>Welcome to the Homepage</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur eos quae dolore, vel repellendus?
        </p>
{/* 
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          
       
        </Switch> */}

        <Switch>
        <Route path="/pages/about">
            <About />
            </Route>
        </Switch>


      </div>
    </Router>
  );
}
export default App;