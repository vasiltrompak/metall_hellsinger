import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';

import RootLayout from "./components/layout/RootLayout/RootLayout.jsx";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import IntroductionPage from './pages/Introduction/IntroductionPage';
import TrailerPage from './pages/Trailer/TrailerPage';
import TrailerVrPage from "./pages/Trailer/TrailerVrPage.jsx";
import AuthPage from "./pages/Auth/AuthPage.jsx";
import GameplayPage from "./pages/Gameplay/GameplayPage.jsx";
import ScreenshotsPage from "./pages/Screenshots/ScreenshotsPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<RootLayout/>}>
                <Route path="introduction" index element={<IntroductionPage/>}/>

                <Route path="trailer" element={<TrailerPage/>}/>
                <Route path="trailer-vr" element={<TrailerVrPage/>}/>
                <Route path="gameplay" element={<GameplayPage/>}/>
                <Route path="screenshots" element={<ScreenshotsPage/>}/>
                <Route path="auth" element={<AuthPage/>}/>
            </Route>

            <Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;