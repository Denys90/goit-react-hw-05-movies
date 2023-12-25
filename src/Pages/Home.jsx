import { Outlet } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import { Suspense } from 'react';

const Home = () => {
  return (
    <main>
      {<MoviesList />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Home;
