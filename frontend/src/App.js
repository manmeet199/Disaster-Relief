import React from "react";
import Missing from "./components/missing/missing";
import Register from "./components/register/register";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";
import LMap from "./components/map/map";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/map" exact component={LMap} />
      <Route path="/register" component={Register} />
      {/* map route */}
      {/* <Route path="/map" component={Map} /> */}
      {/* missing route */}
      <Route path="/missing" component={Missing} />
    </Router>
  );
}

export default App;
