import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9HK6hp0o8P2HhYp579CWIlaUK7cjiZsI",
  authDomain: "gym-training-abe84.firebaseapp.com",
  projectId: "gym-training-abe84",
  storageBucket: "gym-training-abe84.appspot.com",
  messagingSenderId: "85046860071",
  appId: "1:85046860071:web:bd4e3e476ef362f2227102",
  measurementId: "G-68HTG43B46"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }