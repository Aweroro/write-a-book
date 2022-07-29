import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Zeus');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, body, author }

        setIsPending(true);

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(book)
        }).then(() => {
            console.log('New book added');
            setIsPending(false);
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h3>Add a New Book</h3>
            <form onSubmit={handleSubmit}>
                <label> Book Title: </label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label> Book Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Book Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Zeus">Zeus</option>
                    <option value="Hades">Hades</option>
                </select>
                {!isPending && <button>Add Book</button>}
                {isPending && <button disabled> Adding book...</button>}
            </form>
        </div>
    );
}

export default Create;