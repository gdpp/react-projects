import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import { Error } from './pages/Error';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="projects" element={<Projects />}>
                        <Route path=":projectId" element={<SingleProject />} />
                    </Route>
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
