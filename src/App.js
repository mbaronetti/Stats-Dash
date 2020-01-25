import React from "react";
//import logo from "./logo.svg";
import { HashRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import Campaigns from "./components/Campaigns/Campaigns";
import Create from "./components/Create/Create";

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <div id="container">
          <Header title="Stats" />
          <Route
            exact
            path="/"
            render={props => (
              <Overview {...props} title="AppLike Frontend Test" />
            )}
          />
          <Route exact path="/campaigns" render={props => <Campaigns />} />
          <Route exact path="/create" render={props => <Create />} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
