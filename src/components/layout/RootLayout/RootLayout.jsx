import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import VideoModal from '../../ui/Modal/VideoModal';

import logoRevealVideo from '../../../assets/introduction/logoreveal.mp4';

const RootLayout = () => {
    const [isLogoModalOpen, setLogoModalOpen] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const toggleMusic = () => {
        setIsMusicPlaying(prev => !prev);
        console.log(isMusicPlaying ? 'Зупиняємо музику' : 'Вмикаємо музику');
    };

    return (
        <div className="App">
            <VideoModal
                show={isLogoModalOpen}
                onClose={() => setLogoModalOpen(false)}
                localVideo={logoRevealVideo}
            />

            <Header />
            <Footer
                onLogoRevealClick={() => setLogoModalOpen(true)}
                isMusicPlaying={isMusicPlaying}
                onMusicToggle={toggleMusic}
            />
            <SideNav />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;