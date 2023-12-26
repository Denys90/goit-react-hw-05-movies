import { useEffect, useState } from 'react';
import fetchMovies from '../components/API/fetchMovies';
import RenderList from '../components/RenderList/RenderList';
import { Title } from '../components/RenderList/Title';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // ===========================================================>
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
    <>
      <Title>Trending today</Title>
      <RenderList movies={movies} />
    </>
  );
};
export default Home;
