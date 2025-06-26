// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyAI5-H0YzK4neknd7w3wX0flTmOPsugDI8",
  authDomain: "al-karam-viandes-bcc16.firebaseapp.com",
  projectId: "alkaramviandes-f3312",
  storageBucket: "al-karam-viandes-bcc16.firebasestorage.app",
  messagingSenderId: "150529634911",
  appId: "1:227254692534:web:87887a8a35ef7ae4685417",
  measurementId: "G-P2HJM9Q7MC"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyCdAZc2NmdKYYBvn-vatv3TZqPacGicSPE",
  authDomain: "alkaramviandes-f3312.firebaseapp.com",
  projectId: "alkaramviandes-f3312",
  storageBucket: "alkaramviandes-f3312.firebasestorage.app",
  messagingSenderId: "227254692534",
  appId: "1:227254692534:web:87887a8a35ef7ae4685417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
