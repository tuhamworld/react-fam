import React from "react";
import Avatar from "../../molecules/Avatar";
import tuham_logo from "../../../assets/images/svgs/tuham-logo.svg";
import { Link } from "react-router-dom";
import tunde_pic from "../../../assets/images/jpgs/tunde-sanusi.jpg";

const LandingPage = () => {
  return (
    <>
      <nav>
        <div>
          <img src={tuham_logo} alt="" width="150px" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/landing-page">Landing Page</Link>
          </li>
          <li>
            <Link to="/lazyloading">Lazy Loading</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard-form">Dashboard Form</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/8rnfrjfnrfj/details?name=tuham&email=example@gmail.com">
              User Details
            </Link>
          </li>
          <li>
            <Link to="/custom-hooks">Custom Hooks</Link>
          </li>
        </ul>
      </nav>

      <section>
        <div>
          <Avatar src={tunde_pic} alt="Tunde" />
        </div>

        <h1>Tunde Sanusi (Tuham) </h1>
        <p>
          Tunde Sanusi is based in Akure, Nigeria and a Software Engineer in Web
          Technologies.
        </p>
      </section>
    </>
  );
};

export default LandingPage;
