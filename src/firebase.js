// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIUkVhohi3Awdn9pf5IJjnrIYTwXoENbQ",
  authDomain: "clone-2455b.firebaseapp.com",
  projectId: "clone-2455b",
  storageBucket: "clone-2455b.appspot.com",
  messagingSenderId: "823930177097",
  appId: "1:823930177097:web:f8d8c036812e7173fde198",
  measurementId: "G-65X0DGZVZ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);