import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const StepPrefetcher = {
  prefetch: () => import(/* webpackPrefetch: true */ 'Pages/Step2/Step2'),
};

const Step1 = () => {
  useEffect(() => {
    StepPrefetcher.prefetch();
  }, []);

  return (
    <>
      <nav>
        <Link to="/step-2">Step 2</Link>
      </nav>
      <h2>Step1</h2>
    </>
  );
};

export default Step1;
