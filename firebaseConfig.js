// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk-xw588h4aFmgOI8ZY_mPQnh-UwuSmVU",
  authDomain: "fitness-app-921ea.firebaseapp.com",
  projectId: "fitness-app-921ea",
  storageBucket: "fitness-app-921ea.appspot.com",
  messagingSenderId: "103236221992",
  appId: "1:103236221992:web:c4ec09e3785c9d256e491d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const firestore = getFirestore(app); // Get the Firestore object from the initialized app

export { app, auth, firestore }; // Export initialized Firebase objects
