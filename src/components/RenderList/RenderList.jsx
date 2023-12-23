import { Link, useLocation } from 'react-router-dom';

const RenderList = ({ movisNames }) => {
  const location = useLocation();
  return (
    <ul>
      {movisNames &&
        movisNames.map(
          movie =>
            movisNames.title && (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            )
        )}
    </ul>
  );
};
export default RenderList;
