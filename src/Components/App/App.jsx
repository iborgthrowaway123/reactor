import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRouter from "../AppRouter/AppRouter";
import { AuthStore } from "../../Services/Auth";

function App() {
  return (
    <div className="App">
      <Provider store={AuthStore}>
        <Header />
      </Provider>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
