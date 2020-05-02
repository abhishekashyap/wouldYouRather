import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/shared/Navbar";
import ToggleQuestionBar from "./components/shared/ToggleQuestionBar";
import Header from "./components/shared/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <ToggleQuestionBar />
      <Login />
      <Home />
    </div>
  );
}

export default App;
