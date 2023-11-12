import React, { useState } from 'react';
import "../index.css";


function HoverEvent() {
    const [state, setState] = useState(`Welcome to TuhamWorld`);

    const handleChange = (event) => {
        setState("Mo ti arrive");
        setTimeout(() => {
            setState("O tun ti pada oo!");
        }, 1000)
    }

    return <h1 onMouseOver={handleChange} className="hover-me">
        {state}
    </h1>;
}

export default HoverEvent;