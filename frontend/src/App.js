import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

//the main page
function App() {
  return (
    <div>
      <Navbar /> <Outlet />
    </div>
  );
}

export default App;
