import Avatar from "../../molecules/Avatar";
import "./index.scss";

function UserProfileCard() {
  return (
    <>
      <div className="card">
        <Avatar />
        <h2>Prince Demo</h2>
        <p>Prince Demo is the first demo to ever live in demoland</p>
      </div>
    </>
  );
}

export default UserProfileCard;
