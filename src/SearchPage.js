import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

export const SearchPage = () => {
    // Tracks user's search input
    const [movieName, setMovieName] = useState("");
    // Up to 12 movies from search results
    const [movies, setMovies] = useState([]);
    // Featured movie from search results
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);

    // API call for movie search
    function updateSearch(searchInput, setMovies, setMovie, setLoading) {
        // accounts for case where input is empty string, otherwise sends request to api
        if (searchInput === "") {
            setMovies([]);
            setMovie({});
            setLoading(false);
        } else {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=23ca29d10fcb0ee407a6a0fddb586cfc&language=en-US&page=1&include_adult=false&query=${searchInput}`)
            .then(response => {
                if (response.data.length !== 0) {
                    setMovies(response.data.results.slice(0, 12));
                    setMovie(response.data.results[0]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    // Note: Debounce code is based on: https://usehooks.com/useDebounce/
    // Used to set how often changing text input calls API, so it will update with movie info after the user has stopped typing
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

    const debouncedMovieName = useDebounce(movieName, 500, setLoading)

    // Initiates loading if movieName is changed
    useEffect(() => {
        setLoading(true);
    }, [movieName])

    // 500ms after user stops typing search input, API call will return information on the movie
    useEffect(() => {
        updateSearch(debouncedMovieName, setMovies, setMovie, setLoading)
    }, [debouncedMovieName])
    
    // Page displays loading symbol under search bar if input is being changed, and displays results under search bar once user has finished typing
    if (loading) {
        return(
            <>
                <SearchBar
                    movieName={movieName}
                    setMovieName={setMovieName}
                />
                <div className="spinner-border" role="status" />
            </>
        )
    } else {
        return(
            <>
                <SearchBar
                    movieName={movieName}
                    setMovieName={setMovieName}
                />
                <SearchResults
                    movieName={movieName}
                    movies={movies}
                    movie={movie}
                    setMovie={setMovie}
                />
            </>
        );
    }
}