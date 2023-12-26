import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchReviews from '../API/fetchReviews';
import { StyledContent } from './StyledContent';

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
      {authors.length === 0 ? (
        <StyledContent>We don`t have any reviews for this movie!</StyledContent>
      ) : (
        authors.map(author => (
          <li key={author.id}>
            <h2>{author.author_details.username}</h2>
            <StyledContent>{author.content}</StyledContent>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
