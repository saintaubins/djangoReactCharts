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
import Register from "./components/Register";
import "./App.css";

const App = () => {
  return (
    <Router>
      <>
        <MyNav />
        <Dashboard />
        <Login />
        <Register />
      </>
    </Router>
  );
};

export default App;
