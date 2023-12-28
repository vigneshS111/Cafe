import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX_Om7IaaC-FFavXTx7B0r_JPWM2qqbU4",
    authDomain: "cafw-fb9d3.firebaseapp.com",
    projectId: "cafw-fb9d3",
    storageBucket: "cafw-fb9d3.appspot.com",
    messagingSenderId: "263185488417",
    appId: "1:263185488417:web:f12f5aba457557fbe2e160"
  };

  const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);


export { app, auth, firestore };