import React, { Suspense, lazy } from "react";
import { withRouter, NavLink, Switch, Route } from "react-router-dom";
// import Image from "./component/Image";
// import Document from "./component/Document";
import Footer from "./component/Footer";

const Image = lazy(() => import("./component/Image"));
const Document = lazy(() => import("./component/Document"));
const Compression = lazy(() => import("./component/Compression"));
const NotFound = () => (
  <div className="container level has-centered">
    <h1>404</h1>
    <br />
    <br />
  </div>
);
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
                location.location.pathname !== "/" ? null : "is-active"
              }
            >
              <NavLink to="/">
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
            <li
              className={
                location.location.pathname !== "/comp" ? null : "is-active"
              }
            >
              <NavLink to="/comp">
                <span className="icon is-small">
                  <i className="fas fa-file-archive"></i>
                </span>
                <span>Compression</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense
          fallback={
            <button className="button is-dark is-loading">Loading</button>
          }
        >
          <Switch>
            <Route exact path="/" component={Image} />
            <Route path="/docs" component={Document} />
            <Route path="/comp" component={Compression} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </section>
  );
};

export default withRouter(App);
