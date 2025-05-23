// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ91maQZkDX9QcGldb3D8_L-9rsE-Hy_Q",
    authDomain: "connect-school-87b57.firebaseapp.com",
    projectId: "connect-school-87b57",
    storageBucket: "connect-school-87b57.firebasestorage.app",
    messagingSenderId: "554787566402",
    appId: "1:554787566402:web:5b15dd76669a92f3c58edb",
    measurementId: "G-0SJ8ER2EEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)
const auth = getAuth(app)
export { fireStore, auth }