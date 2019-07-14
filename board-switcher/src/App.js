import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import BoardSwitcher from "./pages/BoardSwitcher/BoardSwitcher";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/BoardSwitcher" component={BoardSwitcher} />
            {/* <Route exact path="/order" component={Order} /> */}
        </Switch>
    </Router>
    <a href="/BoardSwitcher">
      <button>Board Switcher</button>
    </a>
    </div>
  );
}

export default App;
