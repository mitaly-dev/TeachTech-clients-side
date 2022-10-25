// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmf_2CXDwkqNcB2we_KZk79cgC_rxeNo4",
  authDomain: "newsday-d1eac.firebaseapp.com",
  projectId: "newsday-d1eac",
  storageBucket: "newsday-d1eac.appspot.com",
  messagingSenderId: "422386379820",
  appId: "1:422386379820:web:5caf26371d10c358e63589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app