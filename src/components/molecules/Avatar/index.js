import React from "react";
import "./index.scss";
import tuham_image from "../../../assets/images/jpgs/tunde-sanusi.jpg";

const Avatar = ({src={tuham_image}, alt="Profile-image"}) => (
  <img
    className="card-image"
    src={src}
    alt={alt}
    width="200px"
    height="200px"
  />
);

export default Avatar;
