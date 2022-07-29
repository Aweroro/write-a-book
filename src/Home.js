
import BookList from './BookList';
import useFetch from './useFetch';

const Home = () => {
    const {  data: books, isPending, error } = useFetch('http://localhost:8000/books')

    return (

        <div className="Home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {books && <BookList books={books} title='All Books' />}
        </div>
    );
}

export default Home;

// [
//     { title: 'My first book', body: 'lorem ipmsum...', author: 'Zeus' },
//     { title: 'My second book', body: 'lorem ipmsum...', author: 'Hades' },
//     { title: 'My third book', body: 'lorem ipmsum...', author: 'Poseidon' }
// ]