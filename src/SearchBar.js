import { Form } from 'react-bootstrap';

export const SearchBar = ({movieName, setMovieName}) => {
    return(
        <Form onSubmit = {(e) => {
            e.preventDefault();
        }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search for a Movie</Form.Label>
                <Form.Control 
                    type="text" 
                    value={movieName} 
                    onChange = {(e) => setMovieName(e.target.value)}
                    placeholder="Enter movie name" />
                </Form.Group>
            </Form>
    )
}
