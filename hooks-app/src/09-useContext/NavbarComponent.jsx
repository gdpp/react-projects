import { Link, NavLink } from 'react-router-dom';

export const NavbarComponent = () => {
    return (
        <nav
            class="navbar navbar-expand-lg bg-dark rounded-3"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    UseContext
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
