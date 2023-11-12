import React from "react";

// Using props
function CarLogo(props) {
  return <div> The logo of CarLogo is {props.logo}</div>;
}

// Using Props destructuring
function Car({ brand, color, year }) {
  return (
    <div className="car">
      {brand}, {color}, {year}.    </div>
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

function CarArrays({data}) {
  return (
    <div className="CarArrays">{data.brand}, {data.color}, {data.year}, { data.engine}</div>
  )
}


// export default Car;
export { Car, CarLogo, CarData, CarArrays };
