import { useEffect, useState } from 'react';
import fetchMovies from '../API/fetchMovies';
import { useLocation } from 'react-router-dom';
import { SectionMovies } from './SectionMovies';
import { StyledLink } from './StyledLink';

// ===========================================================>
const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
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
    <SectionMovies>
      <h1>Trending today</h1>
      <ul>
        {filteredMovies.map(movie => (
          <StyledLink
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <li id={movie.id}>{movie.title}</li>
          </StyledLink>
        ))}
      </ul>
    </SectionMovies>
  );
};
export default MoviesList;
