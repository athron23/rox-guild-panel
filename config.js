// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCjLsw-z9XVZqA83YXkcnwUrRUl7IYtP4",
  authDomain: "rox-guild-panel.firebaseapp.com",
  databaseURL: "https://rox-guild-panel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rox-guild-panel",
  storageBucket: "rox-guild-panel.firebasestorage.app",
  messagingSenderId: "305122333765",
  appId: "1:305122333765:web:8b34a1c9074b7778083f2c",
  measurementId: "G-BY1R0XBKZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
