import React from "react";
// import UserProfileCard from './components/UserProfileCard';
// import ListComponent from './components/ListComponent';
// import Counter from './components/counter';
// import HoverEvent from "./components/StateEvents";
// import Car from "./components/CarProps";
// import CarLogo from "./components/CarProps";

import { Car, CarLogo, CarData, CarArrays } from "./components/CarProps";
import "./index.css";

function App() {

  const carList = [{
    brand: 'Ford',
    year: 1993,
    color: "silver"
  },
    {
      brand: "Toyota",
      year: 2017,
      color: "blue"
    },
    {
      brand: "Peugeot",
      year: 2023,
      color: "gold"
    }]
  
  const listOfCars = carList.map((car) => {
        return <CarArrays data={car} />
  })

  return (
    <div className="car">
      
      {/* Using Props */}
      <CarLogo logo="Pepsi" />


      {/* Parsing in data from props destructuring*/}
      <Car brand="Tesla" color="blue" year="1994" />
      <Car brand="Ford" color="gold" year="2001" />


      {/* Using data destructuring in data */}
      <CarData
        data={{
          year: 1994,
          color: "silver",
        }}
      />


{listOfCars}
    

    </div>
  );
}

export default App;
