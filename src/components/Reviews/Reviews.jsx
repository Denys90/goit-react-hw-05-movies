import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchReviews from '../API/fetchReviews';

const Reviews = () => {
  const [authors, setAuthors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      if (!authors) return;

      try {
        const { data } = await fetchReviews(movieId);

        setAuthors(data.results);
      } catch (error) {
        throw error;
      }
    };

    fetchAuthor();
  }, [authors, movieId]);

  return (
    <ul>
      {authors.map(author => (
        <li key={author.username}>
          <h2>{author.author_details.username}</h2>
          <p>{author.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
