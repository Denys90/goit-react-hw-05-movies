import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
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
      <Link to={location.state?.from ?? '/movies'}>Go to back!</Link>
      <section>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : DEFAULT_POSTER_PATH
            }
            alt={title}
            width={300}
            height={400}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>User Score: {Math.round(popularity / 10)}%</p>
          <p>
            <b>Overview</b> {overview}
          </p>
          <ul>
            {oneMovie.genres &&
              oneMovie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage....</div>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </main>
  );
};
export default MovieData;
