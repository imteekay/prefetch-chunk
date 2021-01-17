import { Link } from 'react-router-dom';

const Step3 = () => (
  <>
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
    <h2>Step3</h2>
  </>
);

export default Step3;
