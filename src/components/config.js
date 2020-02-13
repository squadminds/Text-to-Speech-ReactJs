import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaF2bFTJZw_C_OvrRqYx7aDBB6cixZYww",
  authDomain: "chat-e030e.firebaseapp.com",
  databaseURL: "https://chat-e030e.firebaseio.com",
  projectId: "chat-e030e",
  storageBucket: "chat-e030e.appspot.com",
  messagingSenderId: "585531973410",
  appId: "1:585531973410:web:cef17eea7b3db32de60f7b",
  measurementId: "G-2EFTG2GDME"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
