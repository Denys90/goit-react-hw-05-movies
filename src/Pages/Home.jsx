import { Outlet } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  return (
    <main>
      {<MoviesList />}
      <Outlet />
    </main>
  );
};
export default Home;
