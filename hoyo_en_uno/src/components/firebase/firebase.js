import firebase from "firebase/app"
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyBdngl7vf-GUlcDDUcdzuPuClsQmnm05F0",
  authDomain: "hoyoenuno-ba709.firebaseapp.com",
  projectId: "hoyoenuno-ba709",
  storageBucket: "hoyoenuno-ba709.appspot.com",
  messagingSenderId: "373862094549",
  appId: "1:373862094549:web:e5afe2d0ed84cfdc98f45c",
});


export function getFirestore() {
    return firebase.firestore(app)
}
