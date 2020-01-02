// eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react";
//import Routers from "./router";
import { withRouter, NavLink, Switch, Route } from "react-router-dom";
import Image from "./component/Image";
import Document from "./component/Document";
const App = location => {
  return (
    <section className="container-fluid is-mobile">
      <div className="container">
        <section className="hero is-dark is-bold has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">AIO</h1>
              <h2 className="subtitle">Platform for file type conversion</h2>
            </div>
          </div>
        </section>
        <div className="tabs is-centered">
          <ul>
            <li
              className={
                location.location.pathname !== "/img" ? null : "is-active"
              }
            >
              <NavLink to="/img">
                <span className="icon is-small">
                  <i className="fas fa-image" aria-hidden="true"></i>
                </span>
                <span>Pictures</span>
              </NavLink>
            </li>
            <li
              className={
                location.location.pathname !== "/docs" ? null : "is-active"
              }
            >
              <NavLink to="/docs">
                <span className="icon is-small">
                  <i className="far fa-file-alt" aria-hidden="true"></i>
                </span>
                <span>Documents</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/img" component={Image} />
          <Route path="/docs" component={Document} />
        </Switch>
      </div>
    </section>
  );
};

export default withRouter(App);
