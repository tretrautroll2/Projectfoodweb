// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmiefaQRHHQTZavuqvp_X3B732Y8dIhTg",
  authDomain: "projectfoodweb.firebaseapp.com",
  projectId: "projectfoodweb",
  storageBucket: "projectfoodweb.appspot.com",
  messagingSenderId: "873217048926",
  appId: "1:873217048926:web:a6c33af88ea41282720fcf",
  measurementId: "G-933L4H2FHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const storage = getStorage(app);
const firestore = getFirestore(app);

export {analytics, auth, storage, firestore};
export default app;
