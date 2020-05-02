import React from "react";
import Login from "./pages/Login";
import Navbar from "./components/shared/Navbar";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
