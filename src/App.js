import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";

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
        <Switch>
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
          <Route path="/login" component={Login} exact />
          <Route component={Error} />
        </Switch>
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
