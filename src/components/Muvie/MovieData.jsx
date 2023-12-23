import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchNameMovie from '../API/fetchNameMovie';

const MovieData = () => {
  const [oneMovie, setOneMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

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

  const { poster_path, title, overview, popularity } = oneMovie;
  const DEFAULT_POSTER_PATH = 'https://via.placeholder.com/92';

  return (
    <main>
      <Link to={location.state.from}>Go to back!</Link>
      <section>
        <div>
          <img
            src={
              poster_path
                ? `http://image.tmdb.org/t/p/w500${poster_path}`
                : DEFAULT_POSTER_PATH
            }
            alt={title}
            width={300}
            height={400}
          />
        </div>
        <h1>{title}</h1>
        <p>User Score: {Math.round(popularity / 10)}%</p>

        <h2>{}</h2>
        <p>
          <b>Overview</b> {overview}
        </p>
        <p></p>
        <p></p>
      </section>
    </main>
  );
};
export default MovieData;
