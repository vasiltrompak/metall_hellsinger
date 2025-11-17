import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './TrailerPage.module.css';
import VideoModal from '../../components/ui/Modal/VideoModal';
import BottomNav from '../../components/ui/BottomNav/BottomNav';

import videoBg from '../../assets/backgrounds/trailer_bg.mp4';
import titleImg from '../../assets/trailer/trailer_title.webp';
import subTitleImg from '../../assets/introduction/metallhellsinger_title.webp';
import contentImg from '../../assets/trailer/trailervid.webp';
import videoPlayerButton from '../../assets/menu/videoplayer_play_button.webp';

const TrailerPage = () => {
    useEffect(() => {
        document.title = "Metal: Hellsinger - Trailer";
    }, []);

    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);

    const YOUTUBE_VIDEO_ID = 'jFAFzl_Tr7s';

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <VideoModal
                show={isModalOpen}
                onClose={closeModal}
                videoId={YOUTUBE_VIDEO_ID}
            />

            <div className={styles.page}>
                <video autoPlay muted loop className={styles.videoBg}>
                    <source src={videoBg} type="video/mp4"/>
                </video>

                <main className={styles.content}>
                    <img src={titleImg} alt="Trailer" className={styles.title}/>
                    <img src={subTitleImg} alt="Metal Hellsinger" className={styles.subTitle}/>

                    <button className={styles.trailerThumbnailWrapper} onClick={openModal}>
                        <img src={contentImg} alt="Open Trailer" className={styles.trailerThumbnail}/>
                        <img
                            src={videoPlayerButton}
                            alt="Play Trailer"
                            className={styles.playButtonOverlay}
                        />
                    </button>
                </main>

                <footer className={styles.footerNav}>
                    <BottomNav
                        label="Trailer VR"
                        onClick={() => navigate('/trailer-vr')}
                    />
                </footer>
            </div>
        </>
    );
};

export default TrailerPage;