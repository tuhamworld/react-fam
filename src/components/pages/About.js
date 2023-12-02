import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact"
import App from "../../App"

function About() {
  return (
    <Router>
      <div className="main-page">
      <h1>This is my About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at
        ipsum animi sapiente, nihil totam natus, officiis suscipit, omnis
        distinctio perferendis? Totam enim consequatur ducimus quos nemo,
        obcaecati nesciunt nulla optio, expedita accusamus aut veritatis esse
        cupiditate rem molestias illo sit possimus nam, facilis deleniti ab
        necessitatibus? Officia pariatur nulla obcaecati consequuntur tenetur ex
        necessitatibus possimus!
      </p>
      </div>
      
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <App/>
        </Route>
      </Switch>
    </Router>
  );
}

export default About;