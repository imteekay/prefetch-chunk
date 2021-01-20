import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    import(/* webpackPrefetch: true */ 'Pages/Step1/Step1');
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
