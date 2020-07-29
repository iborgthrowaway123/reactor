import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRouter from "../AppRouter/AppRouter";
import { AuthStore } from "../../Services/Auth";
import Signup from "../Signup/Signup";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "../Home/Home"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Provider store={AuthStore}>
        <Header />
          <Switch>
            <Route path="/Signup" component={Signup} />
          </Switch>
        {/* <Route path="/Signup" component={Signup}/> */}
      </Provider>
      <AppRouter />
      <Footer />
    </div>
    </BrowserRouter>
  
  );
}

export default App;
