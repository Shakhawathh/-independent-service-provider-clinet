// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDn1sUfNBPobAddSOOTACG7R63orS8T8",
  authDomain: "photographer-gallery-8b487.firebaseapp.com",
  projectId: "photographer-gallery-8b487",
  storageBucket: "photographer-gallery-8b487.appspot.com",
  messagingSenderId: "604591832109",
  appId: "1:604591832109:web:5a4d2ec2435ef4ee100ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

