import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    /* apiKey: "AIzaSyAAHzM65FQgcb5_0wd9pNuql5KsgVIkTPs",
    authDomain: "pruebaucamp.firebaseapp.com",
    projectId: "pruebaucamp",
    storageBucket: "pruebaucamp.appspot.com",
    messagingSenderId: "216287474425",
    appId: "1:216287474425:web:2d2ee2454488a19b0d6828" */
  apiKey: "AIzaSyAlHXzQxFQNMYc5tEBKKKDiuzP1vhUNLd0",
  authDomain: "mi-primer-proyecto-fb-810b1.firebaseapp.com",
  projectId: "mi-primer-proyecto-fb-810b1",
  storageBucket: "mi-primer-proyecto-fb-810b1.appspot.com",
  messagingSenderId: "904903135100",
  appId: "1:904903135100:web:c0a0b03a7d7a7974e8def9",
  measurementId: "G-J41D7PBFYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;