import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, fetchMovieReviews } from '../../services/api';
import './MovieDetails.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);

      const movieCredits = await fetchMovieCredits(movieId);
      setCredits(movieCredits);

      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews);
    };

    fetchData();
  }, [movieId]);

  return (
    <div className="details-container">
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <h2>Additional Information</h2>
          <ul>
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li>
          </ul>
          <Outlet />
        </>
      )}
      {credits.length > 0 && (
        <div>
          <h2>Cast</h2>
          <ul>
            {credits.map((credit) => (
              <li key={credit.id}>{credit.name}</li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length > 0 && (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>{review.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );  
};

export default MovieDetails;
