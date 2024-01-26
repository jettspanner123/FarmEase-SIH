

import { initializeApp } from "firebase/app";
import {getDatabase} from "@firebase/database";
import {getAuth} from "@firebase/auth";

const FirebaseConfig = {
    apiKey: "AIzaSyAwYqL0DX1wj0v18lHMoGI_vRILUUnZ_aA",
    authDomain: "krishimitra-9511a.firebaseapp.com",
    projectId: "krishimitra-9511a",
    storageBucket: "krishimitra-9511a.appspot.com",
    messagingSenderId: "67775177417",
    appId: "1:67775177417:web:35e128435a751196612318"
};

export const FirebaseApplication  = initializeApp(FirebaseConfig);
export const FirebaseDatabase  = getDatabase(FirebaseApplication);
export const FirebaseAuth = getAuth(FirebaseApplication);