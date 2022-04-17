// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbWNhm_kiksyPK1vloqY8MeDkF-iOwYTk",
    authDomain: "willy-loman-photography-corner.firebaseapp.com",
    projectId: "willy-loman-photography-corner",
    storageBucket: "willy-loman-photography-corner.appspot.com",
    messagingSenderId: "902586070505",
    appId: "1:902586070505:web:c0745b24cbeed6ddfcc778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;