// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj8d5yADssqPyHL888c8yGdNYbgd0gZ9M",
  authDomain: "car-doctor-9c584.firebaseapp.com",
  projectId: "car-doctor-9c584",
  storageBucket: "car-doctor-9c584.appspot.com",
  messagingSenderId: "389599283755",
  appId: "1:389599283755:web:24bcbcefab32f32c00386e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;