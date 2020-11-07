// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// Add the Firebase products that you want to use
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBZscA5balWnqbMFTzIFwfRtUi1H3o3A_c",
  authDomain: "news-bambu.firebaseapp.com",
  databaseURL: "https://news-bambu.firebaseio.com",
  projectId: "news-bambu",
  storageBucket: "news-bambu.appspot.com",
  messagingSenderId: "1041875679233",
  appId: "1:1041875679233:web:707abfa3b9c176d908e800",
  measurementId: "G-L9BNZ4Y4J4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);