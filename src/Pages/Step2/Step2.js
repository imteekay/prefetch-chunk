import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Step2 = () => {
  useEffect(() => {
    import(/* webpackPrefetch: true */ 'Pages/Step3/Step3');
  }, []);

  return (
    <>
      <nav>
        <Link to="/step-3">Step 3</Link>
      </nav>
      <h2>Step2</h2>
    </>
  );
};

export default Step2;
