import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchReviews from '../API/fetchReviews';

const Reviews = () => {
  const [authors, setAuthors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const { data } = await fetchReviews(movieId);

        setAuthors(data.results);
      } catch (error) {
        throw error;
      }
    };

    fetchAuthor();
  }, [movieId]);

  return (
    <ul>
      {authors.map(author => (
        <li key={author.id}>
          <h2>{author.author_details.username}</h2>
          <p>{author.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
