import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, isPending, error } = useFetch('http://localhost:8000/books/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/books/' + book.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="book-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {book && (
                <article>
                    <h2>{book.title}</h2>
                    <p>Writeen by {book.author}</p>
                    <div>{book.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BookDetails;