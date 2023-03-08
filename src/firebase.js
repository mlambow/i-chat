import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDaBJAfcMf7laxcJ7tWJl_bE1BChaFwe1k",
  authDomain: "i-chat-30db6.firebaseapp.com",
  projectId: "i-chat-30db6",
  storageBucket: "i-chat-30db6.appspot.com",
  messagingSenderId: "208933574258",
  appId: "1:208933574258:web:f392ce1a9cd43e1a1bd4eb"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)