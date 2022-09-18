// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66aCbIrFrCDtw4UIuCMrKZsqaewX0Ki8",
  authDomain: "dr-jhatka.firebaseapp.com",
  projectId: "dr-jhatka",
  storageBucket: "dr-jhatka.appspot.com",
  messagingSenderId: "296006910239",
  appId: "1:296006910239:web:9af23cdaacbfdabef3b02a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;