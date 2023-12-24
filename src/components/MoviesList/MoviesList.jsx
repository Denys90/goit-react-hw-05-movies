import { useEffect, useState } from 'react';
import fetchMovies from '../API/fetchMovies';
import { Link, useLocation } from 'react-router-dom';
// ===========================================================>
const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // const backlinkLocationRef = useRef(location.state?.from ?? '/movies');
  // ===========================================================>
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchPopularMovies();
  }, []);
  // ===========================================================>

  const filteredMovies = movies.filter(movie => movie.title);
  // ===========================================================>
  return (
    <>
      <ul>
        {filteredMovies.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <li id={movie.id}>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default MoviesList;
// -----------------------------------------------
