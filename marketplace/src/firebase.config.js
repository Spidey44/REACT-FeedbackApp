import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCRYQXlzv7s3ELVUfAd9CIXSInih84lrM4",
    authDomain: "house-marketplace-app-399620.firebaseapp.com",
    projectId: "house-marketplace-app-399620",
    storageBucket: "house-marketplace-app-399620.appspot.com",
    messagingSenderId: "451330737446",
    appId: "1:451330737446:web:e316a0befae1c1d22d2de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
