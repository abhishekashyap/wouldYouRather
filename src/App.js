import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    console.log("Authed user", this.props.authedUser);
  }
  render() {
    return (
      <Router>
        <LoadingBar style={{ backgroundColor: "#1A91DA", height: "5px" }} />
        <Navbar />
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/leaderboard" component={Leaderboard} exact />
        <Route path="/add" component={Add} exact />
        <Route path="/question/:id" component={AnswerPage} exact />
        <Route path="/question/:id/result" component={Result} />
        <Route path="/login" component={Login} exact />
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
