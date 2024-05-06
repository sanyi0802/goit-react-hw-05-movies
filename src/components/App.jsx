import React, { useState, useEffect } from 'react';

const API_KEY = '5c5e0fb3bd93237658e0e48819bd474e';
const API_URL = 'https://api.themoviedb.org/3';

const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
