import React from "react";

function ListComponent() {
  const cars = ["BMW", "Audi", "Volkswagen", "Mercendenz", "Suzuki", "Bajaj"];
  const listItems = cars.map((car) => {
    return <li key={car}>{car}</li>;
  });

  return <ol>{listItems}</ol>;
}

export default ListComponent;
