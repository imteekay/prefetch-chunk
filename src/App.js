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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/step-1">Step 1</Link>
          </li>
          <li>
            <Link to="/step-2">Step 2</Link>
          </li>
          <li>
            <Link to="/step-3">Step 3</Link>
          </li>
        </ul>
      </nav>

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
    </div>
  </Router>
);

export default App;