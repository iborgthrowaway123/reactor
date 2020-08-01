import React from "react";
import { Route, Switch } from "react-router-dom";
import AppRoutes from "../../routes";

const AppRouter = () => (
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
);

export default AppRouter;
