import React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import authentication from "./firebase/authentication"

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
