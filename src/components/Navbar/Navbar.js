import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar navbar--style">
      <h2>Tuham Sample Site</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
