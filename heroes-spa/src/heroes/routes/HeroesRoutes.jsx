import { Navigate, Routes, Route } from 'react-router-dom';

import { Navbar } from '../../ui/components/Navbar';
import { DcPage } from '../pages/DcPage';
import { MarvelPage } from '../pages/MarvelPage';
import { SearchPage } from '../pages/SearchPage';
import { HeroPage } from '../pages/HeroPage';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="marvel" />} />
                </Routes>
            </div>
        </>
    );
};
