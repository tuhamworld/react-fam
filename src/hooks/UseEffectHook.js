import React, { useEffect, useState } from "react";

function UseEffect() {
  // Use React State to set count....
  const [count, setCount] = useState(0);

  // Use Effect for Hook to show....
  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default UseEffect;
