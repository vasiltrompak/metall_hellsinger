import React, {useState} from 'react';
import './App.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import NavItem from './components/ui/NavItem/NavItem';

import IntroductionPage from './pages/Introduction/IntroductionPage';
import TrailerPage from './pages/Trailer/TrailerPage';
import TrailerVrPage from "./pages/Trailer/TrailerVrPage.jsx";
import AuthPage from "./pages/Auth/AuthPage.jsx";
import GameplayPage from "./pages/Gameplay/GameplayPage.jsx";
import ScreenshotsPage from "./pages/Screenshots/ScreenshotsPage.jsx";

import VideoModal from "./components/ui/Modal/VideoModal.jsx";

import logoRevealVideo from './assets/introduction/logoreveal.mp4';

const navPages = [
    {id: 'intro', name: 'Introduction', href: '#intro'},
    {id: 'trailer', name: 'Trailer', href: '#trailer'},
    {id: 'gameplay', name: 'Gameplay', href: '#gameplay'},
    {id: 'screenshots', name: 'Screenshots', href: '#screenshots'},
    {id: 'auth', name: 'Login/Register', href: '#auth'},
];

function App() {
    const [activePage, setActivePage] = useState('intro');
    const [isLogoModalOpen, setLogoModalOpen] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    /*const [isAuthPage, setShowAuthPage] = useState(false);

    const handleNavigation = (pageId) => {
        setActivePage(pageId);
        setShowAuthPage(false);
    };

    const openAuthPage = () => {
        setActivePage('intro');
        setShowAuthPage(true);
    };*/

    const toggleMusic = () => {
        setIsMusicPlaying(prev => !prev);
        console.log(isMusicPlaying ? 'Зупиняємо музику' : 'Вмикаємо музику');
    };

    const navigateTo = (pageId) => {
        setActivePage(pageId);

        const page = navPages.find(p => p.id === pageId);
        if (page) {
            window.location.hash = page.href;
        }
    };

    return (
        <div className="App">
            <VideoModal
                show={isLogoModalOpen}
                onClose={() => setLogoModalOpen(false)}
                localVideo={logoRevealVideo}
            />

            <Header activePage={activePage}/>
            <Footer
                activePage={activePage}
                onLogoRevealClick={() => setLogoModalOpen(true)}
                isMusicPlaying={isMusicPlaying}
                onMusicToggle={toggleMusic}
            />

            <nav className="sideNav">
                {navPages.map(page => (
                    <NavItem
                        key={page.id}
                        href={page.href}
                        isActive={activePage === page.id}
                        onClick={(e) => {
                            e.preventDefault();
                            navigateTo(page.id);
                        }}
                        label={page.name}
                    />
                ))}
            </nav>

            {activePage === 'intro' && <IntroductionPage/>}
            {activePage === 'trailer' && <TrailerPage/> && <TrailerPage onNavigate={setActivePage}/>}
            {activePage === 'trailerVr' && <TrailerVrPage onNavigate={setActivePage}/>}
            {activePage === 'gameplay' && <GameplayPage onNavigate={setActivePage}/>}
            {activePage === 'screenshots' && <ScreenshotsPage onNavigate={setActivePage}/>}
            {activePage === 'auth' && <AuthPage onNavigate={setActivePage}/>}
            {/*{setShowAuthPage && <AuthPage onNavigate={handleNavigation}/>}*/}

        </div>
    );
}

export default App;