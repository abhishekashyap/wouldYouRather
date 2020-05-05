import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import Navbar from "./components/shared/Navbar";
import Header from "./components/shared/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Leaderboard from "./pages/Leaderboard";
import AnswerPage from "./pages/AnswerPage";
import Result from "./pages/Result";
import PrivateRoute from "./components/PrivateRoute";
import error from "./pages/error";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <LoadingBar style={{ backgroundColor: "#1A91DA", height: "5px" }} />
        <Navbar />
        <Header />
        <PrivateRoute
          path="/"
          component={Home}
          authedUser={this.props.authedUser}
          exact
        />
        <PrivateRoute
          path="/leaderboard"
          component={Leaderboard}
          authedUser={this.props.authedUser}
          exact
        />
        <PrivateRoute
          path="/add"
          component={Add}
          authedUser={this.props.authedUser}
          exact
        />
        <PrivateRoute
          path="/question/:id"
          component={AnswerPage}
          authedUser={this.props.authedUser}
          exact
        />
        <PrivateRoute
          path="/question/:id/result"
          authedUser={this.props.authedUser}
          component={Result}
        />
        <Route path="/404" component={error} exact />
        <Route path="/login" component={Login} exact />
        <Redirect to="/404" />
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
