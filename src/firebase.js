// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGS3vduPSTxjrCfoEPKmKNq_IrQAGBu58",
  authDomain: "chat-app-c750b.firebaseapp.com",
  projectId: "chat-app-c750b",
  storageBucket: "chat-app-c750b.appspot.com",
  messagingSenderId: "859231477318",
  appId: "1:859231477318:web:6651578bde37a645d77447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);