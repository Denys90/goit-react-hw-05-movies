import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState, useRef } from 'react';
import fetchNameMovie from '../API/fetchNameMovie';
import { FaLongArrowAltRight } from 'react-icons/fa';
import {
  Container,
  Section,
  ImageContainer,
  MovieDetailsContainer,
  InfoContainer,
  GenresList,
  Score,
  LinkStyled,
} from './Container';

const MovieData = () => {
  const [oneMovie, setOneMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backlinkLocationRef = useRef(location.state?.from ?? '/movies');

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

  const { poster_path, title, overview, popularity, release_date } = oneMovie;
  const DEFAULT_POSTER_PATH = 'https://via.placeholder.com/92';
  const dateString = release_date;
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();

  return (
    <Container>
      <NavLink to={backlinkLocationRef.current}>Go to back!</NavLink>
      <Section>
        <ImageContainer>
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
        </ImageContainer>
        <MovieDetailsContainer>
          <h1>
            {title}({year})
          </h1>
          <Score>
            <b>User Score:</b> {Math.round(popularity / 10)}%
          </Score>
          <p>
            <b>Overview: </b> {overview}
          </p>
          <GenresList>
            <b>Genres:</b>
            {oneMovie.genres &&
              oneMovie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </GenresList>
        </MovieDetailsContainer>
      </Section>
      <InfoContainer>
        <h2>Additional information</h2>
        <ul>
          <li>
            <LinkStyled to="cast">
              Cast...
              <FaLongArrowAltRight />
            </LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">
              Reviews...
              <FaLongArrowAltRight />
            </LinkStyled>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage....</div>}>
          <Outlet />
        </Suspense>
      </InfoContainer>
    </Container>
  );
};
export default MovieData;
