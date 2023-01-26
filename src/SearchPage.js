import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

export const SearchPage = () => {
    // Tracks user's search input
    const [movieName, setMovieName] = useState("");
    // Up to 10 movies from search results
    const [movies, setMovies] = useState([]);
    // Featured movie from search results
    const [movie, setMovie] = useState({});

    const debouncedMovieName = useDebounce(movieName, 500)

    // 500ms after user stops typing search input, API call will return information on the movie
    useEffect(() => {
        if (debouncedMovieName) {
            updateSearch(debouncedMovieName, setMovies, setMovie)
        }
    }, [debouncedMovieName])

    return(
        <>
            <SearchBar movieName={movieName} setMovieName={setMovieName} />
            <SearchResults movieName={movieName} movies={movies} movie={movie} />
        </>
    );
}

// API call for movie search
function updateSearch(searchInput, setMovies, setMovie) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=23ca29d10fcb0ee407a6a0fddb586cfc&language=en-US&page=1&include_adult=false&query=${searchInput}`)
    .then(response => {
        if (response.data.length != 0) {
            setMovies(response.data.results.slice(0, 10));
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