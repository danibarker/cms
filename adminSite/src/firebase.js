// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL4hlOtA13iyZIniTA07tvYk8JFbcoNlc",
  authDomain: "another-61e1b.firebaseapp.com",
  projectId: "another-61e1b",
  storageBucket: "another-61e1b.appspot.com",
  messagingSenderId: "651996409848",
  appId: "1:651996409848:web:ff21ac64f3f839fdf1b00d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
