import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form } from './Form';
import { BsSearch } from 'react-icons/bs';

// ===========================================================>
const SubmitForm = ({ onSubmit }) => {
  const [queryInput, setQueryInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // ===========================================================>
  const query = searchParams.get('query') ?? '';

  // ===========================================================>

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(queryInput);
    setSearchParams({ query: queryInput });
  };
  // ===========================================================>
  const updateQueryString = e => {
    const queryVelue = e.target.value;
    if (queryVelue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryVelue });
    setQueryInput(queryVelue);
  };
  // ===========================================================>
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={updateQueryString}
          placeholder="Search movie "
        ></input>
        <button type="submit">
          <BsSearch />
        </button>
      </Form>
    </>
  );
};

export default SubmitForm;
