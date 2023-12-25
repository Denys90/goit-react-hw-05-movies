import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import NotFound from '../components/NotFound/NotFound';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('../components/Reviews/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
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
