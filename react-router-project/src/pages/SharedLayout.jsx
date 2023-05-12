import { Outlet } from 'react-router-dom';

// Components
// import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const SharedLayout = () => {
    return (
        <>
            <StyledNavbar />
            <Outlet />
        </>
    );
};

export default SharedLayout;
