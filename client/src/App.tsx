import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/index'
import Update from './components/update'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
