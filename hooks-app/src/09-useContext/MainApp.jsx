import { Route, Routes } from 'react-router-dom';
import { NavbarComponent } from './NavbarComponent';
import { HomeComponent } from './HomeComponent';
import { AboutComponent } from './AboutComponent';
import { LoginComponent } from './LoginComponent';

import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>Main App</h1> */}
            <NavbarComponent />
            <hr />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="login" element={<LoginComponent />} />
                <Route path="about" element={<AboutComponent />} />
                <Route path="/*" element={<HomeComponent />} />
            </Routes>
        </UserProvider>
    );
};
