import React, { useState } from "react";
// import UserProfileCard from './components/UserProfileCard';
// import ListComponent from './components/ListComponent';
// import Counter from './components/counter';
import "./index.css";

function App() {
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

export default App;
