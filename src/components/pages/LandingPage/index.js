import React from "react";
import Avatar from "../../molecules/Avatar";
import tunde_pic from "../../../assets/images/jpgs/tunde-sanusi.jpg";
import tuham_logo from "../../../assets/images/svgs/tuham-logo.svg";
import "./index.scss";

const LandingPage = () => {
  return (
    <>
      <nav>
<img src={tuham_logo} alt="" width="200px" />
       </nav>

      <section className="main-page">
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
