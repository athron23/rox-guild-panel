// ==========================
// Google Sheet CSV
// ==========================
const SHEET_CSV="https://docs.google.com/spreadsheets/d/e/2PACX-1vSX3TECUPYpRg1VqI-Sl20a0LE8H1rKlDeHpTgVd_6bs3Be2ziYj6-tDVjgtLzi0w/pub?output=csv";

// ==========================
// Google Apps Script (save sheet)
/// ==========================
const GAS_URL="https://script.google.com/macros/s/AKfycbxz5pPwMzeOkoz9O_v607AZFniRdd4Y9-USE3BpvkAbsxq2rAGAJ5aSXEv6q3mBtW4/exec";

// ==========================
// Firebase config (v8 style)
// ==========================
const firebaseConfig={
 apiKey:"AIzaSyDCjLsw-z9XVZqA83YXkcnwUrRUl7IYtP4",
 authDomain:"rox-guild-panel.firebaseapp.com",
 databaseURL:"https://rox-guild-panel-default-rtdb.asia-southeast1.firebasedatabase.app",
 projectId:"rox-guild-panel",
 storageBucket:"rox-guild-panel.firebasestorage.app",
 messagingSenderId:"305122333765",
 appId:"1:305122333765:web:8b34a1c9074b7778083f2c",
 measurementId:"G-BY1R0XBKZ7"
};

// init firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.database();

// ==========================
// รหัสหัวกิลด์
// ==========================
const ADMIN_PASS="1234";
