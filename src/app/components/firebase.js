// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdoJdRbFeqOBAQeE4uePqYxs-5TaOfdCM",
  authDomain: "colegiotableau-ed499.firebaseapp.com",
  databaseURL: "https://colegiotableau-ed499-default-rtdb.firebaseio.com",
  projectId: "colegiotableau-ed499",
  storageBucket: "colegiotableau-ed499.appspot.com",
  messagingSenderId: "1008092499368",
  appId: "1:1008092499368:web:740c0397bb460b2c8ba19d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }
export default app