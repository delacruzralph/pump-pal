// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsSDZRfUNTvHaaSgCBN66PfKCiKCmrviA",
  authDomain: "pump-pal-7eef1.firebaseapp.com",
  projectId: "pump-pal-7eef1",
  storageBucket: "pump-pal-7eef1.appspot.com",
  messagingSenderId: "985207696907",
  appId: "1:985207696907:web:0614fcaa411594eca8210e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);