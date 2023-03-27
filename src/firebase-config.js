import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD2-XvLenEkJoTQ7WiS3Dgg4arXyaIR_aA",
  authDomain: "convin-d6f00.firebaseapp.com",
  projectId: "convin-d6f00",
  storageBucket: "convin-d6f00.appspot.com",
  messagingSenderId: "598671450410",
  appId: "1:598671450410:web:a5d6d4240aae92fbcafe53",
  measurementId: "G-7K9FMXS1WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
