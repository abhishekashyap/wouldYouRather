import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading-bar";
import Navbar from "./components/shared/Navbar";
import Header from "./components/shared/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Leaderboard from "./pages/Leaderboard";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <LoadingBar style={{ backgroundColor: "#1A91DA", height: "5px" }} />
        {/* Show navbar if the user is authed */}
        <Navbar />
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/leaderboard" component={Leaderboard} exact />
        <Route path="/add" component={Add} exact />
        <Route path="/question/:id" component={Add} />
      </Router>
    );
  }
}

export default connect()(App);
