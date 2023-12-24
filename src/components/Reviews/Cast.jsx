import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from '../API/fetchCast';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchNameCasts = async () => {
      if (!casts) return;

      try {
        const { data } = await fetchCast(movieId);

        setCasts(data.cast);
      } catch (error) {
        throw error;
      }
    };

    fetchNameCasts();
  }, [casts, movieId]);
  const DEFAULT_POSTER_PATH = 'https://via.placeholder.com/200';
  return (
    <>
      <ul>
        {casts.map(cast => (
          <li key={cast.cast_id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={`${cast.name} profile`}
              />
            ) : (
              // <div>No Image</div>
              <img src={DEFAULT_POSTER_PATH} alt={cast.name} />
            )}
            <div>
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
