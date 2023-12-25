import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// ===========================================================>
const SubmitForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // ===========================================================>
  const movieId = searchParams.get('movieId') ?? '';

  // ===========================================================>

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setSearchParams({ movieId: '' });
  };
  // ===========================================================>
  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ movieId: movieIdValue });
    }
    setQuery(movieIdValue);
  };
  // ===========================================================>
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movieId}
        onChange={updateQueryString}
        placeholder="Search movie "
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SubmitForm;
