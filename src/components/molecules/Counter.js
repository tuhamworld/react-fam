import React, { useState } from "react";
import "../index.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  return (
    <section className="counter-container">
      <div className="counter">{counter}</div>
      <button className="action-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="action-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </section>
  );
}

export default Counter;
