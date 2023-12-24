import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Home from '../Pages/Home';
// import Movies from '../Pages/Movies';
// import NotFound from '../components/NotFound/NotFound';
// import MovieDetails from '../Pages/MovieDetails';
// import SharedLayout from './SharedLayout/SharedLayout';
import Cast from './Reviews/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const SharedLayout = lazy(() =>
  import('../components/SharedLayout/SharedLayout')
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
