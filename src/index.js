import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import serviceWorker from "./serviceWorker";
import  firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyApXyRVepe2w3NqE1u3T0hLfyB-oPXV70A",
  authDomain: "cart-7c7a8.firebaseapp.com",
  databaseURL: "https://cart-7c7a8-default-rtdb.firebaseio.com",
  projectId: "cart-7c7a8",
  storageBucket: "cart-7c7a8.appspot.com",
  messagingSenderId: "10440831352",
  appId: "1:10440831352:web:8f9c02bd4299bdbe7a988d"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


