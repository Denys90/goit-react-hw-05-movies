import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from '../API/fetchCast';
import { GastList, CastCard } from './GastList';
import { StyledContent } from './StyledContent';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchNameCasts = async () => {
      try {
        const { data } = await fetchCast(movieId);

        setCasts(data.cast);
      } catch (error) {
        throw error;
      }
    };

    fetchNameCasts();
  }, [movieId]);

  const DEFAULT_POSTER_PATH = 'https://via.placeholder.com/200';
  return (
    <>
      <GastList>
        {casts.length === 0 ? (
          <StyledContent>
            We don`t have any reviews for this movie!
          </StyledContent>
        ) : (
          casts.map(cast => (
            <CastCard key={cast.cast_id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt={`${cast.name} profile`}
                />
              ) : (
                <img src={DEFAULT_POSTER_PATH} alt={cast.name} />
              )}
              <div>
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </div>
            </CastCard>
          ))
        )}
      </GastList>
    </>
  );
};

export default Cast;
