import React, {useState} from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Authentication from "./firebase/authentication"

const auth = new Authentication();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  auth.setLoggedInState(loggedIn, setLoggedIn, user, setUser);

  return (
    <div className="App">
      <MainPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} auth={auth} />
    </div>
  );
}

export default App;