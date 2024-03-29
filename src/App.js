// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./assets/styles/main.css";
// import { Home } from "./components/pages/Home";
import {
  AboutUs,
  Albums,
  ContactUs,
  Dashboard,
  DashboardForm,
  LandingPage,
  LazyLoading,
  Pagination,
  Registration,
  RouterHooks,
  Todo,
  UseEffect,
  UserDetails,
  Users,
} from "./components/pages";


const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/albums" element={<Albums />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-form" element={<DashboardForm />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/lazyloading" element={<LazyLoading />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<h1>404 Error</h1>} />
        <Route path="/router-hooks" element={<RouterHooks />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/details" element={<UserDetails />} />

        {/* <Route path="/:userName/status/:tweetId" element={<Twitter Sample />} /> */}
      </Routes>

    </div>
  );
};
export default App;
