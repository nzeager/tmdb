import { Card } from "react-bootstrap"
import broken_backdrop_path from "./images/broken_backdrop_path.jpeg"

export const FeaturedMovie = ({ movie }) => {
    // Replaces broken images with default image
    const onImageError = (e) => {
        e.target.src = broken_backdrop_path;
    }

    return(
        <>
            <div><strong>Featured Result</strong></div>
            {console.log(movie.backdrop_path)}
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.original_title} poster`} onError={onImageError}/>
                <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                    <strong>Overview:</strong> {movie.overview}
                    </Card.Text>
                    <Card.Text>
                    <strong>Release Date:</strong> {movie.release_date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}