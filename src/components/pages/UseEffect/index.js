import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //  ............ Fires when the component mounts, when the state changes, and on cleanup
    useEffect(() => {
      console.log("No dependency array");
      setIsLoggedIn(true)
    });
  
  
    // .............. fire when the component mounts and when the state changes
    useEffect(() => {
      console.log("Dependency array with Empty parameter");
      setIsLoggedIn(true);
    }, []);
  
    // ........Fire when the component mountsm and trigger subsequently when the parameter changes
    useEffect(() => {
      console.log("Dependency Array with parameter");
    }, [isLoggedIn]);
    return (
        <>
            <h2>UseEffect Hooks</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut dolore voluptatum impedit illum 
            </p>
        </>
)

}

export default UseEffect;