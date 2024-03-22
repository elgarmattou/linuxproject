 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD0BtGOqd7JxAT2Dbc2gnXV0XQSR2oDqnU",
   authDomain: "test-linux-d2dc4.firebaseapp.com",
   projectId: "test-linux-d2dc4",
   storageBucket: "test-linux-d2dc4.appspot.com",
   messagingSenderId: "831505529160",
   appId: "1:831505529160:web:c392066b6fc4af701b1b7d",
   measurementId: "G-MH3CJ1C4R9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);