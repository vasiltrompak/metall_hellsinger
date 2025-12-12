import React, {useState} from 'react';
import styles from './ModdingPage.module.css';
import VideoModal from '../../components/ui/Modal/VideoModal';

import {useTitle} from "../../hooks/useTitle.js";

import videoBg from '../../assets/backgrounds/modding_bg.mp4';
import titleImg from '../../assets/modding/modding_title.webp';
import vidImg from '../../assets/modding/modding_vid.webp';
import steamImg from '../../assets/modding/steam.webp';
import packageFrame from '../../assets/modding/package_frame.webp';
import pdfFrame from '../../assets/modding/pdf_frame.webp';
import videoFrame from '../../assets/modding/video_frame.webp';
import videoPlayerButton from '../../assets/menu/videoplayer_play_button.webp';

const ModdingPage = () => {
    useTitle('Metal: Hellsinger - Modding');

    const [isJazzModalOpen, setJazzModalOpen] = useState(false);
    const [isGuideModalOpen, setGuideModalOpen] = useState(false);

    const JAZZ_MOD_VIDEO_ID = 'oKIXju2MQH4';
    const GUIDE_VIDEO_ID = 'TTSiK282cYI';

    const openJazzModal = () => setJazzModalOpen(true);
    const closeJazzModal = () => setJazzModalOpen(false);

    const openGuideModal = () => setGuideModalOpen(true);
    const closeGuideModal = () => setGuideModalOpen(false);

    return (
        <>
            <VideoModal
                show={isJazzModalOpen}
                onClose={closeJazzModal}
                videoId={JAZZ_MOD_VIDEO_ID}
            />
            <VideoModal
                show={isGuideModalOpen}
                onClose={closeGuideModal}
                videoId={GUIDE_VIDEO_ID}
            />

            <div className={styles.moddingPage}>
                <video autoPlay muted loop className={styles.videoBg}>
                    <source src={videoBg} type="video/mp4"/>
                </video>

                <header className={styles.title}>
                    <img src={titleImg} alt="Modding"/>
                </header>

                <main className={styles.content}>
                    <section className={styles.leftColumn}>
                        <button
                            className={styles.videoThumbnailWrapper}
                            onClick={openJazzModal}
                        >
                            <img
                                src={vidImg}
                                alt="Metal Hellsinger Jazz Mod"
                                className={styles.videoPlaceholder}
                            />
                            <img
                                src={videoPlayerButton}
                                alt="Play Video"
                                className={styles.playButtonOverlay}
                            />
                        </button>
                    </section>

                    <section className={styles.rightColumn}>
                        <ol className={styles.stepsList}>
                            <li>
                                <span>01</span>
                                <p>
                                    Get a copy of the full game or the demo on PC
                                    <a
                                        href="https://store.steampowered.com/app/1061910/Metal_Hellsinger/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={steamImg}
                                            alt="Steam Logo"
                                            className={styles.steamIcon}
                                        />
                                    </a>
                                </p>
                            </li>
                            <li>
                                <span>02</span>
                                <p>
                                    Download FMOD Studio 2.00.08
                                    <br/>
                                    Available by creating an account at{' '}
                                    <a
                                        href="https://www.fmod.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.externalLink}
                                    >
                                        FMOD.com
                                    </a>
                                </p></li>
                            <li>
                                <span>03</span>
                                <p>
                                    Download the MHS package (400mb) and follow the modding
                                    tutorial
                                </p>
                            </li>
                        </ol>

                        <div className={styles.linksContainer}>
                            <a
                                href="https://github.com/vasiltrompak/metall_hellsinger/releases/download/zip/MHModdingPackage1.0.zip"
                                download
                                className={styles.modLink}
                                style={{backgroundImage: `url(${packageFrame})`}}
                            >
                                MODDING PACKAGE
                            </a>
                            <a
                                href="/MetalHellsinger_Modding_Guide_v2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.modLink}
                                style={{backgroundImage: `url(${pdfFrame})`}}
                            >
                                TUTORIAL PDF
                            </a>
                            <button
                                onClick={openGuideModal}
                                className={`${styles.modLink} ${styles.modLinkButton}`}
                                style={{backgroundImage: `url(${videoFrame})`}}
                            >
                                TUTORIAL VIDEO
                            </button>
                        </div>
                    </section>
                </main>

                <footer className={styles.bottomText}>
                    <p>
                        For the willing player, Metal: Hellsinger can now become K-Pop, country, EDM, disco,
                        classical, rap, reggae – the list goes on! Modder-musicians are invited to
                        push the boundaries of good demon-slaying motivation.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default ModdingPage;