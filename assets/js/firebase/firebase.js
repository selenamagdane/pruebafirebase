// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhfMTpCDpxHJC3aHabQYDnLz-LiZ06q5I",
  authDomain: "prueba-firebase-6334c.firebaseapp.com",
  projectId: "prueba-firebase-6334c",
  storageBucket: "prueba-firebase-6334c.appspot.com",
  messagingSenderId: "221463434506",
  appId: "1:221463434506:web:8790e23b7edd6245f056f3",
  measurementId: "G-7R6VMRT9DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
