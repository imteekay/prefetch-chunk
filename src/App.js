import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Step1 from './Pages/Step1';
import Step2 from './Pages/Step2';
import Step3 from './Pages/Step3';
import Home from './Pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/step-1">
        <Step1 />
      </Route>
      <Route path="/step-2">
        <Step2 />
      </Route>
      <Route path="/step-3">
        <Step3 />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;