import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCOG44_s2iz_bohJNmcT6RwuPeVNpqFNmc",
  authDomain: "task-love.firebaseapp.com",
  projectId: "task-love",
  storageBucket: "task-love.firebasestorage.app",
  messagingSenderId: "352110969756",
  appId: "1:352110969756:web:c0a7a43ecadc53602f7e59",
  measurementId: "G-673DPFD3VM"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app); // ✅ initialize and export db

export { app, auth, db }; // ✅ now db is available to import
