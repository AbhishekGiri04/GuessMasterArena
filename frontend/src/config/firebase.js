import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBIhEdhR0CbFTPSiGjMb2r9gcecSa8qWnQ",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "guessmaster-arena.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "guessmaster-arena",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "guessmaster-arena.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "252347873448",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:252347873448:web:0df94d152402fb4a112a9d",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-7ZDXXEZB7P"
};

let app, auth, googleProvider;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
} catch (error) {
  console.warn('Firebase initialization failed:', error);
  auth = null;
  googleProvider = null;
}

export { auth, googleProvider };