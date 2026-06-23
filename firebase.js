// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWTWSMZelhkMvhS8nyJQ6Jh5JCRoAKyJM",
  authDomain: "m-shwari-abfe3.firebaseapp.com",
  projectId: "m-shwari-abfe3",
  storageBucket: "m-shwari-abfe3.firebasestorage.app",
  messagingSenderId: "713338202870",
  appId: "1:713338202870:web:505e67b052300ebd5d5ad7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
