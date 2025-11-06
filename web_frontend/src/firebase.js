import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAE3p_epmlmYcr5NoToaFD_uKl58JDILZw",
  authDomain: "medi-bridge-54dec.firebaseapp.com",
  projectId: "medi-bridge-54dec",
  storageBucket: "medi-bridge-54dec.appspot.com", 
  messagingSenderId: "423431831605",
  appId: "1:423431831605:web:86232221c9c3d58aecf17c",
  measurementId: "G-WKKLPV2TEL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const analytics = getAnalytics(app);


export { app, auth };
