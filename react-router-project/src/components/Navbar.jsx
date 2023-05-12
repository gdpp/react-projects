import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Gustavo Perez</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;
