import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import styles from './ArtistDetailPage.module.css';

import {useFetch} from '../../hooks/useFetch';

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
    const {artistId} = useParams();

    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;
    const {data: artist, loading, error} = useFetch(`${apiUrl}/artists/${artistId}`);

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        setCurrentSongIndex(0);
    }, [artistId]);

    useEffect(() => {
        if (error) {
            navigate('/404');
        }
    }, [error, navigate]);

    const renderContent = () => {
        if (loading) {
            return <Loader />;
        }

        if (!artist || error) {
            navigate('/404');
            return null;
        }

        const currentSong = artist.songs[currentSongIndex];
        const showArrows = artist.songs.length > 1;

        const nextSong = () => {
            setCurrentSongIndex((prev) => (prev + 1) % artist.songs.length);
        };
        const prevSong = () => {
            setCurrentSongIndex((prev) => (prev - 1 + artist.songs.length) % artist.songs.length);
        };

        return (
            <>
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
            </>
        );
    };

    return (
        <>
            {artist && (
                <VideoModal
                    show={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    videoId={artist.songs[currentSongIndex].videoId}
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
                    {renderContent()}
                </main>
            </div>
        </>
    );
};

export default ArtistDetailPage;