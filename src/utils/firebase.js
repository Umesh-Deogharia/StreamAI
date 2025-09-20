// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoim_uJMhohXfHFN5DRUGIt6A7Mwn_NLs",
    authDomain: "stream-ai-b55a3.firebaseapp.com",
    projectId: "stream-ai-b55a3",
    storageBucket: "stream-ai-b55a3.firebasestorage.app",
    messagingSenderId: "124543022366",
    appId: "1:124543022366:web:699bfdb90ff90255d2050f",
    measurementId: "G-8KZBFSKYB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();