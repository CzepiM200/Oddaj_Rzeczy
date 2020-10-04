import * as firebase from "firebase";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export const SignUpWithEmailAndPassword = (email, password, history) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      history.push("/login");
      alert("Konto zostało założone prawidłowo");
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const Logout = () => {
  auth
    .signOut()
    .then((cred) => {
      alert("Wylogowano pomyślnie");
    })
    .catch((error) => {
      alert("W trakcie wylogowywanie wystąpił błąd");
    });
};
