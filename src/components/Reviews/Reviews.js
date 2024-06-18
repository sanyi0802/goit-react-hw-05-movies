import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import './Reviews.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews);
    };

    fetchData();
  }, [movieId]);

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <ul>
        {reviews.length ? (
          reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
