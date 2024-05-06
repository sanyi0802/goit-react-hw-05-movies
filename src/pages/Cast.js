import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '5c5e0fb3bd93237658e0e48819bd474e';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      const data = await response.json();
      setCast(data.cast);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
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
