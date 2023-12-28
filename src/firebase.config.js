import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBX_Om7IaaC-FFavXTx7B0r_JPWM2qqbU4",
    authDomain: "cafw-fb9d3.firebaseapp.com",
    projectId: "cafw-fb9d3",
    storageBucket: "cafw-fb9d3.appspot.com",
    messagingSenderId: "263185488417",
    appId: "1:263185488417:web:f12f5aba457557fbe2e160"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };