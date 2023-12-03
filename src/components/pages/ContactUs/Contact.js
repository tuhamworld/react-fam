import React from "react";
import About from "../AboutUs/About"
import App from "../../../App"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Contact() {
  return (
    <Router>
      <div className="main-page">
      <h1>This is my Contact Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
        obcaecati ipsam, illo iste sapiente aspernatur quos soluta quo fuga
        deleniti nam eum voluptatum ducimus laboriosam culpa cum consequatur
        quas earum modi totam ipsa, dicta magnam eos sunt. Eum itaque doloribus
        iste autem, modi sapiente amet voluptatum culpa suscipit porro alias ea
        ipsam eaque, nemo omnis necessitatibus rerum officia consectetur quas
        optio tempora asperiores aperiam. Velit adipisci magni temporibus, totam
        corporis obcaecati, omnis sit rerum, aliquid exercitationem rem et cum
        repudiandae laborum quia? Necessitatibus excepturi ipsum commodi optio
        nihil. Consequatur voluptatibus ex enim veritatis molestiae nemo aut
        quos autem illo odio.
      </p>
      </div>
      
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <App/>
        </Route>
</Switch>

    </Router>
  );
}

export default Contact;
