import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "../../routes";

const AppRouter = () => (
  <BrowserRouter>
    {AppRoutes.map((route, index) => (
      <Route
        key={`route_${index + 1}`}
        path={route.path}
        exact
        component={route.component}
      />
    ))}
  </BrowserRouter>
);

export default AppRouter;
