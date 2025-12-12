import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './GameplayPage.module.css';

import {useTitle} from "../../hooks/useTitle.js";

import BottomNav from '../../components/ui/BottomNav/BottomNav';
import VideoModal from '../../components/ui/Modal/VideoModal';

import videoBg from '../../assets/backgrounds/gameplay_bg.mp4';
import titleImg from '../../assets/gameplay/gameplay_title.webp';
import trailerImg from '../../assets/gameplay/gameplay_trailer.webp';
import videoPlayerPlayButton from '../../assets/menu/videoplayer_play_button.webp';

const GameplayPage = () => {
    useTitle("Metal: Hellsinger - Gameplay");

    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const YOUTUBE_VIDEO_ID = 'vig4_lsrpto';

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
                    <img src={titleImg} alt="Gameplay" className={styles.title}/>

                    <div className={styles.mainSection}>
                        <div className={styles.left}>
                            <div className={styles.trailerThumbnailWrapper} onClick={openModal}>
                                <img src={trailerImg} alt="Gameplay Trailer" className={styles.trailerImage}/>
                                <img
                                    src={videoPlayerPlayButton}
                                    alt="Play Trailer"
                                    className={styles.playButtonOverlay}
                                />
                            </div>
                        </div>

                        <div className={styles.right}>
                            <p>
                                Strike terror into the hearts of demons and devils as you fight
                                your way through eight Hells. Metal: Hellsinger is a rhythm
                                FPS, brimming with diabolical enemies, powerful weapons,
                                and metal music. Set out on an infernal journey in order to
                                achieve the purest of goals: Vengeance.
                            </p>
                            <p>
                                Your ability to shoot on the beat will directly impact both the
                                damage you deal and how awesome the music sounds. The
                                more in sync you are with the rhythm, the more intense the
                                music will become and the more destruction you will cause.
                            </p>
                            <p>
                                Play through an epic storyline, brilliantly narrated by award-winning
                                actor Troy Baker. Then conquer the leaderboards or
                                challenge yourself in Challenge Mode.
                            </p>
                        </div>
                    </div>
                </main>

                <footer className={styles.footerNav}>
                    <BottomNav
                        label="Screenshots"
                        onClick={() => navigate('/screenshots')}
                    />
                </footer>
            </div>
        </>
    );
};

export default GameplayPage;