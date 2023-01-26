export const FeaturedMovie = ({ movie }) => {
    return(
        <>
            <div><strong>Featured Result</strong></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.original_title} backdrop`} width='900'></img>
            <div style={{backgroundColor: 'white'}}><strong>Title:</strong> {movie.original_title}</div>
            <div><strong>Overview:</strong> {movie.overview}</div>
            <div><strong>Release Date:</strong> {movie.release_date}</div>
        </>
    )
}