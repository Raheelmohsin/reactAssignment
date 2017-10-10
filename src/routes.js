import React, { Component } from "react";
import PeopleList from "./components/people/people";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return <PeopleList />;
            }}
          />
        </div>
      </Router>
    );
  }
}
