import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import RenderList from '../RenderList/RenderList';
import fetchKeyword from '../API/fetchKeyword';

const SubmitForm = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movisNames, setMovisNames] = useState(
    () => JSON.parse(localStorage.getItem('movisNames')) || []
  );

  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    localStorage.setItem('movisNames', JSON.stringify(movisNames));
  }, [movisNames]);

  const handleSubmit = async event => {
    event.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetchKeyword(query);
      console.log('fetchKeyword=====>', response.data.results);
      setMovisNames(prevState => [...prevState, ...response.data.results]);
    } catch (error) {
      throw error;
    }
    setQuery('');
  };

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieId}
          onChange={updateQueryString}
          placeholder="Search movie "
        ></input>
        <button type="submit">Search</button>
      </form>
      <RenderList movisNames={movisNames} />
    </>
  );
};

export default SubmitForm;
