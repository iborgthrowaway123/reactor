import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Account from "../Components/Account/Account";

const AppRouter = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/account" exact component={Account} />
  </BrowserRouter>
);

export default AppRouter;
