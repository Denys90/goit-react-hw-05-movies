import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
// import NotFound from '../components/NotFound/NotFound';
import MovieDetails from '../Pages/MovieDetails';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
