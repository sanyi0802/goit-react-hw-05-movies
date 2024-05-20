import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import './Cast.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieCredits = await fetchMovieCredits(movieId);
      setCast(movieCredits);
    };

    fetchData();
  }, [movieId]);

  return (
    <div className="cast-container">
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
