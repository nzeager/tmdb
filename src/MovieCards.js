import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"

export const MovieCards = ({ movies, setMovie }) => {
    console.log(movies)
    return(
        <>
            <div><strong>More Results</strong></div>
            {movies.map((mov) => (
                <div key={mov.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`} alt={`${mov.original_title} poster`} />
                    <Card.Body>
                        <Card.Title>{mov.original_title}</Card.Title>
                        {/* <Card.Img src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`} alt={`${movie.original_title} poster`} /> */}
                        <Button variant="primary" onClick={() => {
                            setMovie(mov);
                            goToTop();
                        }}>Movie Details</Button>
                    </Card.Body>
                </Card>
                </div>
            ))}
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

// Splits array into array of smaller arrays. Code from: https://stackabuse.com/how-to-split-an-array-into-even-chunks-in-javascript/
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
