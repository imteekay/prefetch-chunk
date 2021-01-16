import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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

const Home = () => <h2>Home</h2>;
const Step1 = () => <h2>Step1</h2>;
const Step2 = () => <h2>Step2</h2>;
const Step3 = () => <h2>Step3</h2>;

export default App;