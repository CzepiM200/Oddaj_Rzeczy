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
      alert(`W trakcie zakłądania konta wystąpił bład: ${error.message}`);
    });
};

export const LoginWithEmailAndPassword = (
  email,
  password,
  history,
  setEmail
) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      setEmail(email);
      history.push("/");
      alert("Zalogowano pomyślnie");
    })
    .catch((error) => {
      alert("W trakcie logowania wystąpił błąd");
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
