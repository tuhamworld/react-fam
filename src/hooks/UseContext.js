import React, { createContext, useContext, useState } from "react"

// Creating Context

const AuthContext = createContext({
    user: {
      username: "tuhamworld",
      name: "Tuham",
      email: "example@gmail.com",
    },
    verified: false,
  });
  
  // Define Context Provider
  function AuthProvider(props) {
    const [user, setUser] = useState({
      username: "tuhamworld",
      name: "Tunde Sanusi",
      email: "example@gmail.com",
      bio: "Tunde Sanusi is passionate about Building online presence for Businesess via Technological Solutions",
    });
    return (
      <AuthContext.Provider
        value={{
          user: user,
          verified: true,
          setUser: setUser,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  }
  
  // User Bio
  function UserBio() {
    const { user, setUser } = useContext(AuthContext);
  
    const handleUpdateBio = (event) => {
      // Update Bio
      event.preventDefault();
      setUser((prev) => {
        return {
          ...prev,
          bio: "Tunde Sanusi was born in Ibadan, Nigeria.",
        };
      });
    };
  
    return (
      <div>
        <h1>User Bio</h1>
        <div>{user.bio}</div>
        <button onClick={handleUpdateBio}>Update Bio</button>
      </div>
    );
  }
  
  // User Profile
  function UserProfile() {
    const { user, verified } = useContext(AuthContext);
    console.log(user);
  
    return (
      <div>
        <h1>User Profile</h1>
        <div>Username: {user.username}</div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>Verified: {verified ? "Yes" : "No"}</div>
  
        <UserBio />
      </div>
    );
  }
  
  function DisplayResults() {
    return (
      <AuthProvider>
        <div className="main-page">
          <UserProfile />
        </div>
      </AuthProvider>
    );
  }
  export default DisplayResults;
  