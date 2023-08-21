// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAmGnaNRtpS0UcKPlTiv3qADFvHRgykZU",
  authDomain: "astro-auth-163b8.firebaseapp.com",
  projectId: "astro-auth-163b8",
  storageBucket: "astro-auth-163b8.appspot.com",
  messagingSenderId: "241917192009",
  appId: "1:241917192009:web:787dc196bc8ccd90bbdc98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);