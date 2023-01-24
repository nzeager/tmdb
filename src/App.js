import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


function App() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState({});

  const debouncedMovieName = useDebounce(movieName, 500)

  // 500ms after user stops typing search input, API call will return information on the movie
  useEffect(() => {
    if (debouncedMovieName) {
        updateSearch(debouncedMovieName, setMovie)
    }
}, [debouncedMovieName])

  console.log(movie)
  console.log(movieName)

  return (
    <div className="App">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for a Movie</Form.Label>
          <Form.Control 
            type="text" 
            value={movieName} 
            onChange = {(e) => setMovieName(e.target.value)}
            placeholder="Enter movie name" />
        </Form.Group>
      </Form>
      <div>Title: {movie.original_title}</div>
      <div>Overview: {movie.overview}</div>
      <div>Release Date: {movie.release_date}</div>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.original_title} poster`}></img>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.original_title} backdrop`}></img>
    </div>
  );
}

// API call for movie search
function updateSearch(searchInput, setMovie) {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=23ca29d10fcb0ee407a6a0fddb586cfc&language=en-US&page=1&include_adult=false&query=${searchInput}`)
  .then(response => {
    if (response.data.length != 0) {
      setMovie(response.data.results[0]);
    }
  })
  .catch(error => {
    console.log(error);
  });
}

// Used to set how often text input calls API, so it will update with movie info after the user has stopped typing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return() => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return debouncedValue
}


export default App;