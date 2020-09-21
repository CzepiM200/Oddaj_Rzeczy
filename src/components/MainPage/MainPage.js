import "./_mainPage.scss";
import React, { useState } from "react";
import LogIn from "../LogIn/LogIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignUp from "../SignUp/SignUp";
import SignOut from "../SignOut/SignOut";

const MainPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <section className="main-page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/login">
            <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/signup">
            <SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/signout">
            <SignOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default MainPage;
