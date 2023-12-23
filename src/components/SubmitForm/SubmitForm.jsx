import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import RenderList from '../RenderList/RenderList';
import fetchKeyword from '../API/fetchKeyword';
// =================================================>
const SubmitForm = () => {
  const [query, setQuery] = useState('');
  const [movisNames, setMovisNames] = useState(
    () => JSON.parse(localStorage.getItem('movisNames')) || []
  );
  // const location = useLocation();
  // =================================================>
  useEffect(() => {
    localStorage.setItem('movisNames', JSON.stringify(movisNames));
  }, [movisNames]);
  // =================================================>
  const handleInputChange = ({ target: { value } }) => {
    setQuery(value);
  };
  // =================================================>
  const handleSubmit = async event => {
    event.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetchKeyword(query);
      console.log('fetchKeyword=====>', response.data.results);
      setMovisNames(prevState => [...prevState, response.data.results]);
    } catch (error) {
      throw error;
    }
    setQuery('');
  };

  // =================================================>
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movie "
        ></input>
        <button type="submit">Search</button>
      </form>

      <RenderList movisNames={movisNames} />
    </>
  );
};

export default SubmitForm;
