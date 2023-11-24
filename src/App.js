import React from "react";
// import UserProfileCard from './components/UserProfileCard';
// import ListComponent from './components/ListComponent';
// import Counter from './components/counter';
// import HoverEvent from "./components/StateEvents";
// import Car from "./components/CarProps";
// import CarLogo from "./components/CarProps";
// import { Car, CarLogo, CarData, CarArrays } from "./components/CarProps";
// import { Loader, Content } from "./components/ConditionalRendering";
// import UseEffect from "./components/UseEffectHook";
// import UseState from "./components/UseState";
// import UseContext from "./components/UseContext";
import "./index.css";

// create Context
const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    username: "tuhamworld",
    name: "Tuham",
    email: "example@gmail.com",
  },
});

// Define Context Provider
function AuthProvider(props) {
  return (
    <AuthContext.provider value={
      {
        isAuthenticated: false,
        user: {
          username: "tuhamworld",
          name: "Tuham",
          email: "example@gmail.com",
        },
      }

      }>
      {props.children}
    </AuthContext.provider>
  );
}

// User Profile
function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
      <div>Username: tuhamworld</div>
      <div>Name: Tunde Sanusi</div>
      <div>Email: example@gmail.com</div>
    </div>
  );
}

function App() {
  return (
    <div className="main-page">
      <UserProfile />
    </div>
  );
}
export default App;
