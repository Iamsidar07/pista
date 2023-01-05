// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMzVaJ3ZSx0qo7UQVTWObTZKO2evEqOEQ",
    authDomain: "pista-social.firebaseapp.com",
    projectId: "pista-social",
    storageBucket: "pista-social.appspot.com",
    messagingSenderId: "684200225097",
    appId: "1:684200225097:web:bb4d72293291623d5c9298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db=getFirestore(app);

export  { auth,app,db };