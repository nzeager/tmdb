import { Card } from "react-bootstrap"
import broken_backdrop_path from "./images/broken_backdrop_path.jpeg"

export const FeaturedMovie = ({ movie }) => {
    // Replaces broken images with default image
    const onImageError = (e) => {
        e.target.src = broken_backdrop_path;
    }

    return(
        <>
            <div><strong>Selected Movie</strong></div>
            <Card>
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={`${movie.title} poster`}
                    onError={onImageError}
                />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview && (
                            <>
                                <strong>Overview:</strong> {movie.overview}
                            </>
                        )}
                    </Card.Text>
                    <Card.Text>
                        {movie.release_date && (
                            <>
                                <strong>Release Date:</strong> {movie.release_date}
                            </>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}