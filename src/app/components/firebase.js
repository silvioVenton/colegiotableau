// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvAdic7oeDRK2bjbj4XBlMEB4151-8Q3c",
  authDomain: "next-crud-f873c.firebaseapp.com",
  projectId: "next-crud-f873c",
  storageBucket: "next-crud-f873c.appspot.com",
  messagingSenderId: "1086219570263",
  appId: "1:1086219570263:web:8314f6cd2063ab73f52712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }
export default app