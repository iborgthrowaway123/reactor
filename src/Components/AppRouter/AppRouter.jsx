import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppRoutes from "../../routes";

const AppRouter = () => (
  <BrowserRouter>
  <Switch>
    {AppRoutes.map((route, index) => (
      <Route
        key={`route_${index + 1}`}
        path={route.path}
        exact
        component={route.component}
      />
    ))}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
