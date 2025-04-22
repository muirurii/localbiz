// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGoogEHJo68hPIHW6_3WmZpV25gjAOwRQ",
  authDomain: "localbiz-ecommerce.firebaseapp.com",
  projectId: "localbiz-ecommerce",
  storageBucket: "localbiz-ecommerce.firebasestorage.app",
  messagingSenderId: "338955312135",
  appId: "1:338955312135:web:898d7c35d266d6c8555ea2",
  measurementId: "G-6NQZGC9Q7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);