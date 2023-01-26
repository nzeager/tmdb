import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"

export const MovieCards = ({ movies, movie }) => {
    return(
        <>
            <div><strong>More Results</strong></div>
            {movies.map((mov) => (

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`} alt={`${mov.original_title} poster`} />
                    <Card.Body>
                        <Card.Title>{mov.original_title}</Card.Title>
                        {/* <Card.Img src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`} alt={`${movie.original_title} poster`} /> */}
                        <Button variant="primary">Movie Details</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}