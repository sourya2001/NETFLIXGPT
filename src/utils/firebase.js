// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth,createUserWithEmailAdPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpcRQAIYhACRT_9E760MEc5vJBWUS8D84",
  authDomain: "netflixgpt-b31e3.firebaseapp.com",
  projectId: "netflixgpt-b31e3",
  storageBucket: "netflixgpt-b31e3.appspot.com",
  messagingSenderId: "34262847628",
  appId: "1:34262847628:web:bbe9cd5af052f22550eba9",
  measurementId: "G-24G41D6310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
