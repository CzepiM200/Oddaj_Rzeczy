import * as firebase from "firebase";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export const SignUpWithEmailAndPassword = (email, password, history) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred);
      history.push("/login");
      alert("Konto zostało założone prawidłowo");
    })
    .catch((error) => {
      alert(error.message);
    });
};
