import React, { Component, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Signup from "./component/signup/Signup";
import Table from "./component/table/Table";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <ToastContainer />

        <Switch>
          <Route
            path="/table"
            render={props => (
              <Suspense
                fallback={
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
              >
                {" "}
                <Table {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/"
            render={props => (
              <Suspense
                fallback={
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                }
              >
                <Signup {...props} />
              </Suspense>
            )}
          />

          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
