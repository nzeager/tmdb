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
                    {movie.overview && <div><strong>Overview:</strong> {movie.overview}</div>}
                    </Card.Text>
                    <Card.Text>
                    {movie.release_date && <div><strong>Release Date:</strong> {movie.release_date}</div>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}