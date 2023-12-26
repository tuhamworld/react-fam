import React, { useEffect, useState } from "react";
import Avatar from "../../molecules/Avatar";
import tunde_pic from "../../../assets/images/jpgs/tunde-sanusi.jpg";
import tuham_logo from "../../../assets/images/svgs/tuham-logo.svg";
import "./index.scss";

// Start Configurations all over

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO_uSqudKJV9FT7dsWdz79U6YFg9fwi-o",
  authDomain: "hello-dctp.firebaseapp.com",
  projectId: "hello-dctp",
  storageBucket: "hello-dctp.appspot.com",
  messagingSenderId: "1056328944899",
  appId: "1:1056328944899:web:ac2d2ce62476ca66b72d36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup auth provider...
const provider = new GoogleAuthProvider();
const auth = getAuth();

// Ends Configurations

const LandingPage = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Sign in to firebase...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  // Sign out of firebase
  const signOut = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      alert("You are now signed out!");
    });
  };

  // Get Redirect Result

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          console.log(result.user);
          setSignedIn(true);
        } else {
          // .....
        }
      })
      .catch((error) => {
        console.log(error);
        // ...
      });
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, set State
        setSignedIn(true);
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        // ...
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <nav>
        <img src={tuham_logo} alt="" width="150px" />
      </nav>

      <section className="main-page">
        {user ? (
          <div>
            <div className="btn">
              Welcome to this Demo page. You are signed in
            </div>
            <h1>{user.displayName} </h1>
            <div>
              <Avatar src={user.photoURL} />
            </div>
            <div>Your Email: {user.email}</div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <div>
            {/* <div style={signedIn ? {} : { display: "none" }} className="">
              Sign in successfully...
            </div> */}
            <div>
              <Avatar src={tunde_pic} alt="Tunde" />
            </div>

            <h1>Tunde Sanusi (Tuham) </h1>
            <p>
              Tunde Sanusi is based in Akure, Nigeria and a Software Engineer in
              Web Technologies.
            </p>

            <div className="auth-container">
              <div className="btn">
                Sign in to access a DEMO personalized content
              </div>
              <button onClick={signIn}>Sign in</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default LandingPage;
