import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter/AppRouter";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthStore } from "../../Services/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={AuthStore}>
          <Header />
        </Provider>
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
