import { FeaturedMovie } from "./FeaturedMovie"
import { MovieCards } from "./MovieCards"
import { NoResults } from "./NoResults"

export const SearchResults = ({ movieName, movies, movie }) => {
    if (movieName === "") {
        return(
            <></>
        )
    } else if (movies.length === 0) {
        return(
            <NoResults />
        )
    } else {
        return(
            <div className="search-results">
                <FeaturedMovie movie={movie} />
                <MovieCards movies={movies} movie={movie} />
            </div>
        )
    }
}