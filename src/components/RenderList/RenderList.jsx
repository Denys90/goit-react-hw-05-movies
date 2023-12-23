import { Link } from 'react-router-dom';
// import { nanoid } from 'nanoid';

const RenderList = ({ movisNames }) => {
  // console.log(movisNames);
  return (
    <ul>
      {movisNames &&
        movisNames.map(
          movie =>
            movisNames.title && (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <li>{movie.title}</li>
              </Link>
            )
        )}
    </ul>
  );
};
export default RenderList;
