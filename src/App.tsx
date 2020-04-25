import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/home" exact render={() => <HomePage />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
