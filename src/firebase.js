// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGwlFgRL52SeO02a6fM0gnybBIX2sw5S4",
  authDomain: "fir-code-along-8bb98.firebaseapp.com",
  projectId: "fir-code-along-8bb98",
  storageBucket: "fir-code-along-8bb98.appspot.com",
  messagingSenderId: "888293195711",
  appId: "1:888293195711:web:10c75b00008559e06c6b0a",
  measurementId: "G-PDTC0CETSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const provider = new GoogleAuthProvider();

export const db = getFirestore();

export const auth = getAuth();
