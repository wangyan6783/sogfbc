import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/home" exact render={() => <HomePage />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
