import * as firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCyDwI9X575ttjO5P_vxMPjEi2INJuOcJY",
  authDomain: "oddaj-rzeczy-5b58f.firebaseapp.com",
  databaseURL: "https://oddaj-rzeczy-5b58f.firebaseio.com",
  projectId: "oddaj-rzeczy-5b58f",
  storageBucket: "oddaj-rzeczy-5b58f.appspot.com",
  messagingSenderId: "38067867932",
  appId: "1:38067867932:web:b86605936984215cf2ead9"
};

export default class Authentication {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.auth.onAuthStateChanged((user) => {
      if(user) {
        console.log("Status: " + user.email);
        this.setLoggedIn(true);
      }
      else
        this.setLoggedIn(false);
      this.setUser(user);
    });
  }

  getUserEmail = () => {
    
    //console.log(this.auth.currentUser ? this.auth.currentUser.email : "Nie zalogowano");
    //return this.auth.currentUser ? this.auth.currentUser.email : "Nie zalogowano";
    return "Temp";
  }

  setLoggedInState(loggedIn, setLoggedIn, user, setUser) {
    this.loggedIn = loggedIn; 
    this.setLoggedIn = setLoggedIn;
    this.user = user;
    this.setUser = setUser;
  }

  Logout() {
    console.log("Logout method: " + this.user.email);
    this.auth
      .signOut()
      .then((cred) => {
        this.setLoggedIn(false);
      })
      .catch((error) => {
        alert("W trakcie wylogowywanie wystąpił błąd");
      });
  };

  LoginWithEmailAndPassword(email, password, history) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
        this.setLoggedIn(true);
      })
      .catch((error) => {
        alert("W trakcie logowania wystąpił błąd");
        history.push("/login");
        this.setLoggedIn(false);
      });
  };

  SignUpWithEmailAndPassword (email, password, history) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        history.push("/login");
        alert("Konto zostało założone prawidłowo");
        this.setLoggedIn(true);
      })
      .catch((error) => {
        alert(`W trakcie zakłądania konta wystąpił bład: ${error.message}`);
      });
  };
}
