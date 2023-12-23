import React, {Suspense}  from "react";
// import Avatar from "../../molecules/Avatar";
import UserProfileCard from "../../organisms/UserProfileCard";
import "./index.scss";

const Avatar = React.lazy(()=> import ("../../molecules/Avatar"))

export const LazyLoading = () => {
  return (
      <>
          <Suspense fallback={<div>Loading...</div>}>
          <Avatar/>
          </Suspense>
          
      <UserProfileCard />
    </>
  );
};
