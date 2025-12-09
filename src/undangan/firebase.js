// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxupOFhXMeAfTJZ3GIE_r6h0Z6HkrqleQ",
  authDomain: "undangan-pernikahan-97c85.firebaseapp.com",
  databaseURL:
    "https://undangan-pernikahan-97c85-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "undangan-pernikahan-97c85",
  storageBucket: "undangan-pernikahan-97c85.firebasestorage.app",
  messagingSenderId: "1049878654822",
  appId: "1:1049878654822:web:ed41139f2d2fdce15c22a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database, ref, push };
