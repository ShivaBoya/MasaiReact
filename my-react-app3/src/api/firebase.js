// src/api/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9oM6CWG4YT41THPS-WNlJFsTm7jL7eGo",
  authDomain: "rtrack-25cab.firebaseapp.com",
  projectId: "rtrack-25cab",
  storageBucket: "rtrack-25cab.appspot.com", // fixed
  messagingSenderId: "64380713316",
  appId: "1:64380713316:web:ec5261b618eb54d3082271",
  measurementId: "G-138BDY1PZT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
