import { useEffect, useState } from 'react';
import fetchMovies from '../API/fetchMovies';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <ul>
      {movies.map(movie => (
        <Link key={nanoid()} to={`/movies/${movie.id}`}>
          <li id={movie.id}>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};
export default MoviesList;
