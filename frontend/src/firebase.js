import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyBUTnUCkvOURQ7dNp21KnZet6ceNN3h5Fc",

  authDomain: "epstein-files-15350.firebaseapp.com",

  projectId: "epstein-files-15350",

  storageBucket: "epstein-files-15350.firebasestorage.app",

  messagingSenderId: "331970604252",

  appId: "1:331970604252:web:b5820ceb8e02b59cf15819",

  measurementId: "G-60X50P8YDP"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
new GoogleAuthProvider();