// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./assets/styles/main.css";
import { LandingPage } from "./components/pages/LandingPage";
import { AboutUs } from "./components/pages/AboutUs";
import { ContactUs } from "./components/pages/ContactUs";
import { Registration } from "./components/pages/Registration";
import { RouterHooks } from "./components/pages/RouterHooks";
import { Dashboard } from "./components/pages/Dashboard";
import { DashboardForm } from "./components/pages/DashboardForm";
import { Users } from "./components/pages/Users";
import { UserDetails } from "./components/pages/Users/userDetails";
import { Pagination } from "./components/pages/Pagination";

// import { Car, CarLogo, CarData, CarArrays } from "./components/CarProps";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<h1>404 Error</h1>} />
        <Route path="/router-hooks" element={<RouterHooks />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/dashboard-form" element={ <DashboardForm /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/users/:userId/details" element={<UserDetails />} />

        {/* <Route path="/:userName/status/:tweetId" element={<Twitter Sample />} /> */}
        
      </Routes>
    </div>
  );
}
export default App;
