import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5RtMCvYkoJzEyNGp5URlztu2_raXbSfI",
    authDomain: "agentprotest-9b32d.firebaseapp.com",
  projectId: "agentprotest-9b32d",
  storageBucket: "agentprotest-9b32d.firebasestorage.app",
  messagingSenderId: "830677444546",
  appId: "1:830677444546:web:72a0ee49829a877cdc585b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);