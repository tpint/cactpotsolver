import React from "react";

import { Solver } from "./container";
import { Navbar } from "./components";
import { Footer } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Solver />
    <Footer />
  </div>
);

export default App;
