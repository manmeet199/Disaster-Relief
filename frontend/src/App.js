import React from "react";
import Missing from "./components/missing/missing";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/register" component={Register} />
      {/* map route */}
      {/* <Route path="/map" component={Map} /> */}
      {/* missing route */}
      <Route path="/missing" component={Missing} />
    </Router>
  );
}

export default App;
