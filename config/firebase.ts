// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPtyBvDsv1_Xss5w4SHq6REqxyrXOqEuw",
  authDomain: "expense-tracker-d213f.firebaseapp.com",
  projectId: "expense-tracker-d213f",
  storageBucket: "expense-tracker-d213f.firebasestorage.app",
  messagingSenderId: "326722962504",
  appId: "1:326722962504:web:2dbbd198467877ef1f047d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// db
export const firestore = getFirestore(app)