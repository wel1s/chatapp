import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyClDhKdmSni3qMWX2I_HN0jzd4IFM5VtJg",
  authDomain: "chat-d45c0.firebaseapp.com",
  projectId: "chat-d45c0",
  storageBucket: "chat-d45c0.appspot.com",
  messagingSenderId: "478103383493",
  appId: "1:478103383493:web:75b906db3fc2eea2b72fac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();