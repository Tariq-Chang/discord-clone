import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBd5UQMSTXOoyJqTKPnS-ufIWwzH0j5bJY",
  authDomain: "discord-clone-8d323.firebaseapp.com",
  projectId: "discord-clone-8d323",
  storageBucket: "discord-clone-8d323.appspot.com",
  messagingSenderId: "866698209650",
  appId: "1:866698209650:web:23ea599d1d5f108a1815eb",
  measurementId: "G-2XYZYSY0JS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
