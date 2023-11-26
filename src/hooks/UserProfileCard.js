import React from "react";
import Avatar from "./Avatar";
import "../assets/styles/card.css";

function UserProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Barack Obama</div>
      <div>Barack Obama was the first black President of the United States</div>
    </div>
  );
}

export default UserProfileCard;
