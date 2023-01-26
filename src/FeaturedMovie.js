import { Card } from "react-bootstrap"

export const FeaturedMovie = ({ movie }) => {
    return(
        <>
            <div><strong>Featured Result</strong></div>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.original_title} poster`} />
                <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                    <div><strong>Overview:</strong> {movie.overview}</div>
                    <div><strong>Release Date:</strong> {movie.release_date}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}