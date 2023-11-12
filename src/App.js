import React from "react";
// import UserProfileCard from './components/UserProfileCard';
// import ListComponent from './components/ListComponent';
// import Counter from './components/counter';
// import HoverEvent from "./components/StateEvents";
// import Car from "./components/CarProps";
// import CarLogo from "./components/CarProps";

import { Car, CarLogo } from "./components/CarProps";
import "./index.css";

function App() {
  return (
    <>
      {/* <HoverEvent /> */}

      <Car brand="Tesla" color="blue" price="56454700" />
      <Car brand="Ford" color="gold" price="12547000" />
          <Car brand="Tesla" color="blue" price="654904980" />
          


          <CarLogo logo="Pepsi"/>
    </>
  );
}

export default App;
