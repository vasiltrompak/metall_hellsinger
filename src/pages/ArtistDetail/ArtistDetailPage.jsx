import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ArtistDetailPage.module.css';

import { useFetch } from '../../hooks/useFetch';

import ArtistSidebar from '../../components/ui/ArtistSidebar/ArtistSidebar';
import IconButton from '../../components/ui/IconButton/IconButton';
import VideoModal from '../../components/ui/Modal/VideoModal';
import Loader from "../../components/layout/Loader/Loader.jsx";

import videoBg from '../../assets/backgrounds/artists_bg.mp4';
import closeIcon from '../../assets/menu/close_button.webp';
import centerLogo from '../../assets/introduction/bg_frame1.webp';
import musicPlayIcon from '../../assets/menu/videoplayer_play_button.webp';
import arrowIcon from '../../assets/menu/logo_reveal_button.webp';

const ArtistDetailPage = () => {
    const { artistId } = useParams();
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    const { data: artist, loading, error } = useFetch(`${apiUrl}/artists/${artistId}`);

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        setCurrentSongIndex(0);
    }, [artistId]);

    useEffect(() => {
        if (error || (!loading && !artist)) {
            navigate('/404');
        }
    }, [error, loading, artist, navigate]);

    if (loading) return <Loader />;
    if (!artist) return null;

    let songsArray = artist.songs;
    if (typeof songsArray === 'string') {
        try {
            songsArray = JSON.parse(songsArray);
        } catch (e) {
            console.error("JSON Parse error", e);
            songsArray = [];
        }
    }

    if (!songsArray || songsArray.length === 0) return <div>No songs data</div>;

    const currentSong = songsArray[currentSongIndex];
    const showArrows = songsArray.length > 1;

    const nextSong = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songsArray.length);
    };
    const prevSong = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songsArray.length) % songsArray.length);
    };

    return (
        <>
            {currentSong && (
                <VideoModal
                    show={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    videoId={currentSong.videoId}
                />
            )}

            <div className={styles.page}>
                <video autoPlay muted loop className={styles.videoBg}>
                    <source src={videoBg} type="video/mp4"/>
                </video>

                <ArtistSidebar/>

                <IconButton
                    icon={closeIcon}
                    onClick={() => navigate('/artists')}
                    className={styles.closeButton}
                />

                <main className={styles.content}>
                    <img src={"/assets/artists/artists_title.webp"} alt="Artists" className={styles.pageTitle}/>

                    <div className={styles.artistInfo}>
                        <img
                            src={artist.mainImage}
                            alt={artist.name}
                            className={styles.mainImage}
                        />
                        <h1 className={styles.artistName}>{artist.name}</h1>
                        <h2 className={styles.artistBand}>{artist.band}</h2>

                        <div className={styles.songSlider}>
                            {showArrows && (
                                <IconButton
                                    icon={arrowIcon}
                                    onClick={prevSong}
                                    className={`${styles.songArrow} ${styles.arrowLeft}`}
                                />
                            )}
                            <h3 className={styles.artistSong}>{currentSong.name}</h3>
                            {showArrows && (
                                <IconButton
                                    icon={arrowIcon}
                                    onClick={nextSong}
                                    className={styles.songArrow}
                                />
                            )}
                        </div>
                    </div>

                    <div className={styles.centerBlock}>
                        <img src={centerLogo} alt="Metal Hellsinger" className={styles.centerLogo}/>
                        <button className={styles.playButton} onClick={() => setModalOpen(true)}>
                            <img src={musicPlayIcon} alt="Play Music"/>
                        </button>
                    </div>

                </main>
            </div>
        </>
    );
};

export default ArtistDetailPage;