import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import broken_poster_path from "./images/broken_poster_path.png"

export const MovieCards = ({ movie, movies, setMovie }) => {
    // Replaces broken images with default image
    const onImageError = (e) => {
        e.target.src = broken_poster_path;
    }

    return(
        <>
            <div className="results"><strong>Results</strong></div>
            <div className="movie-cards">
            {movies.map((mov) => (
                // Class 'border-dark' is from bootstrap and used to identify the current 'featured movie'. Class 'border-shadow' is defined in App.css.
                <Card className={movie.id === mov.id && 'border-dark border-shadow'} key={mov.id}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`} alt={`${mov.original_title} poster`}  onError={onImageError} />
                    <Card.Body>
                        <Card.Title>{mov.original_title}</Card.Title>
                        <Button variant="primary" onClick={() => {
                            setMovie(mov);
                            goToTop();
                        }}>Movie Details</Button>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </>
    )
}

// Scrolls back to top of page. Code based on tutorial: https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};