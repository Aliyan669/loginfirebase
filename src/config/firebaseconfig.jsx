// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaMdmsKIBEYCGJa2EKjLiGmcRXZFRrxH0",
  authDomain: "login-form-482c5.firebaseapp.com",
  projectId: "login-form-482c5",
  storageBucket: "login-form-482c5.appspot.com",
  messagingSenderId: "657165143769",
  appId: "1:657165143769:web:8c04f0834679f6f89f38c8",
  measurementId: "G-5WEVE3VM0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app; 