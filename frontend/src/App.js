import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MyNav from "./components/MyNav";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import Register from "./components/Register";
import "./App.css";

const App = () => {
  return (
    <Router>
      <>
        <MyNav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;
