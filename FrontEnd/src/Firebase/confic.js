import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig  = {
    apiKey: "AIzaSyCx6K6aV-R63UdeFyVJmxfi6ImYs4Ky7WM",
    authDomain: "olx-react-7392f.firebaseapp.com",
    projectId: "olx-react-7392f",
    storageBucket: "olx-react-7392f.appspot.com",
    messagingSenderId: "619229234518",
    appId: "1:619229234518:web:33218b15ac02a9be9dc2f7",
    measurementId: "G-FYLQ43L2CP"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();
  export const storage = getStorage();
  
  export default app;