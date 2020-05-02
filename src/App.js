import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Header from "./components/shared/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
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

export default App;
