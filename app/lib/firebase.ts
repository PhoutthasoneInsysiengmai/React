// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Y-GNAf1s6WQZCq_Wqgrz5Q3-Hrq4Fbs",
  authDomain: "recipe-c0a91.firebaseapp.com",
  databaseURL: "https://recipe-c0a91-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recipe-c0a91",
  storageBucket: "recipe-c0a91.firebasestorage.app",
  messagingSenderId: "594745762001",
  appId: "1:594745762001:web:08a54904eb391b5e1f25f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};