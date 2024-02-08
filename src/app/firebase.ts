// Import the functions you need from the SDKs you need
import { getApp, getApps ,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV8RZL2rFhWsdqulc0aOmfebVl8buG3l4",
  authDomain: "login-test-5b32a.firebaseapp.com",
  projectId: "login-test-5b32a",
  storageBucket: "login-test-5b32a.appspot.com",
  messagingSenderId: "543485682635",
  appId: "1:543485682635:web:cf861c04954d6e5e024c4e",
  measurementId: "G-EW3F61E6QE"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }