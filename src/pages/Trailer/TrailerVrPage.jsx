import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerVrPage.module.css';
import VideoModal from '../../components/ui/Modal/VideoModal';
import BottomNav from '../../components/ui/BottomNav/BottomNav';

import videoBg from '../../assets/backgrounds/trailer_bg.mp4';
import titleImg from '../../assets/trailer/trailer_title.png';
import subTitleImg from '../../assets/trailer/metallhellsingervr_title.png';
import contentImg from '../../assets/trailer/tailervrvid.jpg';
import videoPlayerButton from '../../assets/menu/videoplayer_play_button.png';

const TrailerPage = ({onNavigate}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const YOUTUBE_VIDEO_ID = '5C7A359m0C8';

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
                        label="Trailer"
                        onClick={() => onNavigate('trailer')}
                    />
                </footer>
            </div>
        </>
    );
};

TrailerPage.propTypes = {
    onNavigate: PropTypes.func.isRequired,
};

export default TrailerPage;