import { useCallback, useState, useEffect } from 'react';
import fetchKeyword from '../API/fetchKeyword';
import SubmitForm from 'components/SubmitForm/SubmitForm';
import RenderList from '../RenderList/RenderList';

const MoviesSearch = () => {
  const [queryValue, setQueryValue] = useState('');
  const [movies, setMovies] = useState([]);
  // ============================================>
  const fetchmoviesKeyWord = useCallback(async () => {
    if (!queryValue) return;

    try {
      const response = await fetchKeyword(queryValue);
      setMovies(prevState => [...prevState, ...response.data.results]);
    } catch (error) {
      throw error;
    }
  }, [queryValue]);
  // ============================================>
  useEffect(() => {
    if (queryValue) {
      fetchmoviesKeyWord();
    }
  }, [queryValue, fetchmoviesKeyWord]);

  // ============================================>
  const handleSearchSubmit = query => {
    if (queryValue !== query) {
      setQueryValue(query);
    }
  };
  // ============================================>
  return (
    <>
      <SubmitForm onSubmit={handleSearchSubmit} />
      <RenderList movies={movies} />
    </>
  );
};
export default MoviesSearch;
