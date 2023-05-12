import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                style={({ isActive }) => {
                    return { color: isActive ? 'red' : 'gray' };
                }}
            >
                Gustavo Perez
            </NavLink>
            <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                    isActive ? 'link active' : 'link'
                }
            >
                Portfolio
            </NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default StyledNavbar;
