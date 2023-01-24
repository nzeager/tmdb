export const SearchResults = ({ movie }) => {
    return(
        <>
            <div>Title: {movie.original_title}</div>
            <div>Overview: {movie.overview}</div>
            <div>Release Date: {movie.release_date}</div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.original_title} poster`}></img>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.original_title} backdrop`}></img>
        </>
    )
}