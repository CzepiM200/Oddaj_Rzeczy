import "./_mainPage.scss";
import React from "react";
import LogIn from "../LogIn/LogIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignUp from "../SignUp/SignUp";
import SignOut from "../SignOut/SignOut";

const MainPage = () => {
  return (
    <section className="main-page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signout">
            <SignOut />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default MainPage;
