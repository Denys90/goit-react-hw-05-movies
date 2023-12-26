import { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchKeyword from '../components/API/fetchKeyword';
import RenderList from '../components/RenderList/RenderList';
import SubmitForm from '../components/SubmitForm/SubmitForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryValue, setQueryValue] = useState('');
  const [searchParams] = useSearchParams();
  // ============================================>
  const fetchmoviesKeyWord = useCallback(async () => {
    if (!queryValue) return;

    try {
      const response = await fetchKeyword(queryValue);
      if (response.data.total_results === 0) {
        return alert(`Sorry, we didn't find any results for ${queryValue}.`);
      }
      setMovies(response.data.results);
    } catch (error) {
      throw error;
    }
  }, [queryValue]);
  // ============================================>
  useEffect(() => {
    const initialQuery = searchParams.get('query') || '';
    setQueryValue(initialQuery);
  }, [searchParams]);
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
export default Movies;
