import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; 
import { Row, Col } from 'react-bootstrap';

const MovieList = () => {
  const API_KEY = 'b0c2c2c9';  
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=superman`;  

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data && response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-list">
      <Row>
        {movies.map((movie) => (
          <Col key={movie.imdbID} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
