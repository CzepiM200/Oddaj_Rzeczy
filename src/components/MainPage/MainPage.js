import "./_mainPage.scss";
import React, { useState } from "react";
import LogIn from "../LogIn/LogIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignUp from "../SignUp/SignUp";
import SignOut from "../SignOut/SignOut";
import PassItems from "../PassItems/PassItems";

const MainPage = (props) => {
  const { loggedIn, setLoggedIn, auth, user, setUser } = props;
  return (
    <section className="main-page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}  auth={auth} />
          </Route>
          <Route exact path="/login">
            <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}  auth={auth}/>
          </Route>
          <Route exact path="/signup">
            <SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}  auth={auth} />
          </Route>
          <Route exact path="/signout">
            <SignOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}  auth={auth} />
          </Route>
          <Route exact path="/passitems">
            <PassItems loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}  auth={auth} />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default MainPage;
