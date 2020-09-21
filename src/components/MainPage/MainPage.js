import "./_mainPage.scss";
import React from "react";
import LogIn from "../LogIn/LogIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

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
          <Route exact path="/signup"></Route>
          <Route exact path="/signout"></Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default MainPage;
