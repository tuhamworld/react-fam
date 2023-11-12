import React, { useState } from "react";
// import UserProfileCard from './components/UserProfileCard';
// import ListComponent from './components/ListComponent';
// import Counter from './components/counter';
// import HoverEvent from "./components/StateEvents";
// import Car from "./components/CarProps";
// import CarLogo from "./components/CarProps";

// import { Car, CarLogo, CarData, CarArrays } from "./components/CarProps";
import { Loader, Content } from "./components/ConditionalRendering";
import "./index.css";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 5000)

  return (
  isLoading ? <Loader/> : <Content/>
)




}

export default App;
