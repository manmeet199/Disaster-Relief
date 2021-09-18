import React from "react";
import Missing from "./components/missing/missing";
import Register from "./components/register/register";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/register" component={Register} />
      {/* map route */}
      {/* <Route path="/map" component={Map} /> */}
      {/* missing route */}
      <Route path="/missing" component={Missing} />
    </Router>
  );
}

export default App;
