// 🔗 Google Sheet CSV
const SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSX3TECUPYpRg1VqI-Sl20a0LE8H1rKlDeHpTgVd_6bs3Be2ziYj6-tDVjgtLzi0w/pub?output=csv";

// 🔥 Firebase config
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

// 🔐 รหัสหัวกิลด์
const ADMIN_PASS = "1234";
