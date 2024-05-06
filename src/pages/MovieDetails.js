import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 
import { fetchMovieDetails } from '../services/api'; 
import { fetchMovieCredits } from '../services/api'; 
import { fetchMovieReviews } from '../services/api'; 

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);

        const movieCredits = await fetchMovieCredits(movieId);
        setCredits(movieCredits);

        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      {/* Renderizado de detalles de la película, créditos y críticas */}
    </div>
  );
};

export default MovieDetails;
