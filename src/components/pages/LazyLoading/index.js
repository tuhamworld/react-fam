import React, {Suspense}  from "react";
// import Avatar from "../../molecules/Avatar";
import UserProfileCard from "../../organisms/UserProfileCard";
import "./index.scss";
import tuham_image from "../../../assets/images/jpgs/tunde-sanusi.jpg";

const Avatar = React.lazy(() => import("../../molecules/Avatar"));

const LazyLoading = () => {
  return (
      <>
          <Suspense fallback={<div>Loading...</div>}>
        <Avatar />
        <div>
        <img src={tuham_image} alt="" width="200px" />

        </div>
          </Suspense>
          
      <UserProfileCard />
    </>
  );
};

export default LazyLoading;