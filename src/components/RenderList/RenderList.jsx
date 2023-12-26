import { useLocation } from 'react-router-dom';
import { SectionMovies } from '../RenderList/SectionMovies';
import { StyledLink } from '../RenderList/StyledLink';

const RenderList = ({ movies }) => {
  const location = useLocation();
  const filteredMovies = movies.filter(movie => movie.title);
  return (
    <SectionMovies>
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
export default RenderList;
