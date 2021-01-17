import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const StepPrefetcher = {
  prefetch: () => import(/* webpackPrefetch: true */ 'Pages/Step3/Step3'),
};

const Step2 = () => {
  useEffect(() => {
    StepPrefetcher.prefetch();
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
