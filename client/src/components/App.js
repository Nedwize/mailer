import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>Survey New</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
  componentDidMount() {
    console.log("Mount");
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
