import { Link } from 'react-router-dom';

const NavBar = () => {
    const title = "Welcome to BookDen...";
    const quote = "...where each book tells a story";
    return (<nav className="navBar">
        <h1>{title}</h1>
        <h2>{quote}</h2>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="Create">New Book</Link>
        </div>
    </nav>);
}

export default NavBar;