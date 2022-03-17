// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSMRWoteSyyJYr4SCY2ZrukmBefJwBn6s',
  authDomain: 'twitter-clone-b69f5.firebaseapp.com',
  projectId: 'twitter-clone-b69f5',
  storageBucket: 'twitter-clone-b69f5.appspot.com',
  messagingSenderId: '5635200260',
  appId: '1:5635200260:web:d4154c6973db0b66e7ec51',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();
