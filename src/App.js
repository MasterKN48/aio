import React, { Suspense, lazy } from "react";
import { withRouter, NavLink, Switch, Route } from "react-router-dom";
// import Image from "./component/Image";
// import Document from "./component/Document";
import Footer from "./component/Footer";

const Image = lazy(() => import("./component/Image"));
const Document = lazy(() => import("./component/Document"));
const Compression = lazy(() => import("./component/Compression"));
const Music = lazy(() => import("./component/Music"));
const CompressedFile = lazy(() => import("./component/CompressedFile"));

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
                location.location.pathname !== "/aio" ? null : "is-active"
              }
            >
              <NavLink to="/aio">
                <span className="icon is-small">
                  <i className="fas fa-image" aria-hidden="true"></i>
                </span>
                <span>Pictures</span>
              </NavLink>
            </li>
            <li
              className={
                location.location.pathname !== "/aio/docs" ? null : "is-active"
              }
            >
              <NavLink to="/aio/docs">
                <span className="icon is-small">
                  <i className="fas fa-file-alt" aria-hidden="true"></i>
                </span>
                <span>Documents</span>
              </NavLink>
            </li>
            <li
              className={
                location.location.pathname !== "/aio/music" ? null : "is-active"
              }
            >
              <NavLink to="/aio/music">
                <span className="icon is-small">
                  <i className="fas fa-music"></i>
                </span>
                <span>Audio</span>
              </NavLink>
            </li>
            <li
              className={
                location.location.pathname !== "/aio/compf" ? null : "is-active"
              }
            >
              <NavLink to="/aio/compf">
                <span className="icon is-small">
                  <i className="fas fa-file-archive"></i>
                </span>
                <span>CompressedFile</span>
              </NavLink>
            </li>
            <li
              className={
                location.location.pathname !== "/aio/comp" ? null : "is-active"
              }
            >
              <NavLink to="/aio/comp">
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
            <div className="container has-text-centered has-centered">
              <button className="button is-dark is-loading spd">Loading</button>
            </div>
          }
        >
          <Switch>
            <Route exact path="/aio" component={Image} />
            <Route path="/aio/docs" component={Document} />
            <Route path="/aio/comp" component={Compression} />
            <Route path="/aio/compf" component={CompressedFile} />
            <Route path="/aio/music" component={Music} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </section>
  );
};

export default withRouter(App);
