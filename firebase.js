// firebase.js (FIXED CLEAN VERSION)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaoJm7m20S2wyvg_qv3nRS2mn3ndzGAwU",
  authDomain: "m-shwari.firebaseapp.com",
  projectId: "m-shwari",
  storageBucket: "m-shwari.firebasestorage.app",
  messagingSenderId: "679819480296",
  appId: "1:679819480296:web:1c57331b9dd4aa7e320d5d"
};

// Initialize Firebase ONLY ONCE
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
