// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export default { app, provider, auth, signInWithRedirect };
