import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsZd3-IiZw071oOiVGaVNawM-GoAhZtDQ",
  authDomain: "house-marketplace-4360a.firebaseapp.com",
  projectId: "house-marketplace-4360a",
  storageBucket: "house-marketplace-4360a.appspot.com",
  messagingSenderId: "546531862243",
  appId: "1:546531862243:web:b49b83f8ecca2f2e7247d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);