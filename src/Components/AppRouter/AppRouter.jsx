import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "../../routes";

const AppRouter = () => (
  <BrowserRouter>
    {AppRoutes.map((route) => (
      <Route path={route.path} exact component={route.component} />
    ))}
  </BrowserRouter>
);

export default AppRouter;
