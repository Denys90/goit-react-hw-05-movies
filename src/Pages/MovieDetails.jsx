import MovieData from '../components/Muvie/MovieData';
import fetchNameMovie from '../components/API/fetchNameMovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [oneMovie, setOneMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchOneMovie = async () => {
      try {
        const response = await fetchNameMovie(movieId);
        setOneMovie(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchOneMovie();
  }, [movieId]);
  return <MovieData oneMovie={oneMovie} />;
};
export default MovieDetails;
