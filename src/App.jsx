import React, {useState} from 'react';
import './App.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import NavItem from './components/ui/NavItem/NavItem';

import IntroductionPage from './pages/Introduction/IntroductionPage';
import TrailerPage from './pages/Trailer/TrailerPage';
import TrailerVrPage from "./pages/Trailer/TrailerVrPage.jsx";

import VideoModal from "./components/ui/Modal/VideoModal.jsx";

import logoRevealVideo from './assets/introduction/logoreveal.mp4';

const navPages = [
    {id: 'intro', name: 'Introduction', href: '#intro'},
    {id: 'trailer', name: 'Trailer', href: '#trailer'},
    {id: 'gameplay', name: 'Gameplay', href: '#gameplay'},
    {id: 'artists', name: 'Artists', href: '#artists'},
    {id: 'screenshots', name: 'Screenshots', href: '#screenshots'},
    {id: 'wiki', name: 'Wiki', href: '#wiki'},
];

function App() {
    const [activePage, setActivePage] = useState('intro');
    const [isLogoModalOpen, setLogoModalOpen] = useState(false);

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
                onLogoRevealClick={() => {
                    setLogoModalOpen(true)
                    console.log("CLICK")}
                }
            />

            <nav className="sideNav">
                {navPages.map(page => (
                    <NavItem
                        key={page.id}
                        href={page.href}
                        isActive={activePage === page.id}
                        onClick={(e) => {
                            e.preventDefault();
                            setActivePage(page.id);
                            window.location.hash = page.href;
                        }}
                        label={page.name}
                    />
                ))}
            </nav>

            {activePage === 'intro' && <IntroductionPage/>}
            {activePage === 'trailer' && <TrailerPage/> && <TrailerPage onNavigate={setActivePage}/>}
            {activePage === 'trailerVr' && <TrailerVrPage onNavigate={setActivePage}/>}

        </div>
    );
}

export default App;