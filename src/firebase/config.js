import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb2xHu9HuH-TlFCRgVzhUvjBs1ooQM-xQ",
  authDomain: "my-money-61e87.firebaseapp.com",
  projectId: "my-money-61e87",
  storageBucket: "my-money-61e87.appspot.com",
  messagingSenderId: "500482339451",
  appId: "1:500482339451:web:ae22b3e3df88288077a8de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const projectFirestore = getFirestore();
const projectAuth = getAuth();

export { projectFirestore, projectAuth };
