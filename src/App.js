import React from "react";
import Navbar from "./components/shared/Navbar";
import Header from "./components/shared/Header";
import ToggleQuestionBar from "./components/shared/ToggleQuestionBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      {/* <ToggleQuestionBar /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Add />
    </div>
  );
}

export default App;