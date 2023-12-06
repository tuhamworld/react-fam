// import React from "react";
import {Route, Routes } from "react-router-dom";
import "./index.css";
import "./assets/styles/main.css";
import {LandingPage} from "./components/pages/LandingPage";
import {AboutUs} from "./components/pages/AboutUs";
import {ContactUs} from "./components/pages/ContactUs";
import {Registration} from "./components/pages/Registration";

// import { Car, CarLogo, CarData, CarArrays } from "./components/CarProps";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/registration" element={<Registration/>} />
        
    </Routes>
    </div>
  )
}
export default App;