import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const StepPrefetcher = {
  prefetch: () => import(/* webpackPrefetch: true */ 'Pages/Step1/Step1'),
};

const Home = () => {
  useEffect(() => {
    StepPrefetcher.prefetch();
  }, []);

  return (
    <>
      <nav>
        <Link to="/step-1">Step 1</Link>
      </nav>
      <h2>Home</h2>
    </>
  );
};

export default Home;
