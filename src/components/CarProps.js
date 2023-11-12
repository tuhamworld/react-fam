import React from "react";

// Using props
function CarLogo(props) {
  return <div> The logo of CarLogo is {props.logo}</div>;
}

// Using Props destructuring
function Car({ brand, color, year }) {
  return (
    <div className="car">
      {brand}, {color}, {year}.{" "}
    </div>
  );
}

// Using destructuring and parsing object data in Apps
function CarData({ data }) {
  return (
    <div>
      {" "}
      This is a Care of Model {data.year} which is {data.color} in Color{" "}
    </div>
  );
}

// Using Array of Cars

function CarArrays({ data }) {
  return (
    <div className="CarArrays">
      {data.brand}, {data.color}, {data.year}, {data.engine}
    </div>
  );
}



// Below is the code to show on App

// function App() {
//   const carList = [
//     {
//       brand: "Ford",
//       year: 1993,
//       color: "silver",
//     },
//     {
//       brand: "Toyota",
//       year: 2017,
//       color: "blue",
//     },
//     {
//       brand: "Peugeot",
//       year: 2023,
//       color: "gold",
//     },
//     {
//       brand: "BMW",
//       year: 2022,
//       color: "diamond"
//     }
//   ];

//   const listOfCars = carList.map((car) => {
//     return <CarArrays data={car} />;
//   });

//   return (
//     <div className="car">
//       {/* Using Props */}
//       <CarLogo logo="Pepsi" />

//       {/* Parsing in data from props destructuring*/}
//       <Car brand="Tesla" color="blue" year="1994" />
//       <Car brand="Ford" color="gold" year="2001" />

//       {/* Using data destructuring in data */}
//       <CarData
//         data={{
//           year: 1994,
//           color: "silver",
//         }}
//       />

//       {listOfCars}
//     </div>
//   );
// }

// export default Car;
export { Car, CarLogo, CarData, CarArrays };
