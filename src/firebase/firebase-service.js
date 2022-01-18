import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNHDYgrfNpHZnwOLh4ejKOoI7hBhHTI0",
  authDomain: "posify-337200.firebaseapp.com",
  projectId: "posify-337200",
  storageBucket: "posify-337200.appspot.com",
  messagingSenderId: "913030465460",
  appId: "1:913030465460:web:2807b0b4545a285bba54e1",
  measurementId: "G-DV71Y6T5DD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
