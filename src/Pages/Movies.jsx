import SubmitForm from '../components/SubmitForm/SubmitForm';
import SearchList from '../components/RenderList/RenderList';

const Movies = ({ movisNames }) => {
  return (
    <>
      <SubmitForm />
      <SearchList movisNames={movisNames} />
    </>
  );
};
export default Movies;
