import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './ScreenshotsPage.module.css';

import BottomNav from '../../components/ui/BottomNav/BottomNav';
import IconButton from '../../components/ui/IconButton/IconButton';

import videoBg from '../../assets/backgrounds/screenshots_bg.mp4';
import arrowIcon from '../../assets/menu/logo_reveal_button.webp';

import screen1 from '../../assets/screenshots/Slides/png_slide_1.webp';
import screen2 from '../../assets/screenshots/Slides/png_slide_2.webp';
import screen3 from '../../assets/screenshots/Slides/png_slide_3.webp';
import screen4 from '../../assets/screenshots/Slides/png_slide_4.webp';
import screen5 from '../../assets/screenshots/Slides/png_slide_5.webp';
import screen6 from '../../assets/screenshots/Slides/png_slide_6.webp';
import screen7 from '../../assets/screenshots/Slides/png_slide_7.webp';
import screen8 from '../../assets/screenshots/Slides/png_slide_8.webp';
import screen9 from '../../assets/screenshots/Slides/png_slide_9.webp';
import screen10 from '../../assets/screenshots/Slides/png_slide_10.webp';

const screenshots = [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10];

const ScreenshotsPage = () => {
    useEffect(() => {
        document.title = "Metal: Hellsinger - Screenshots";
    }, []);

    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        // (prev + 1) % screenshots.length
        setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    };

    const prevSlide = () => {
        // (prev - 1 + screenshots.length) % screenshots.length
        setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <div className={styles.page}>
            <video autoPlay muted loop className={styles.videoBg}>
                <source src={videoBg} type="video/mp4"/>
            </video>

            <main className={styles.content}>
                <div className={styles.sliderContainer}>
                    <IconButton
                        icon={arrowIcon}
                        onClick={prevSlide}
                        className={styles.arrowLeft}
                    />

                    <img
                        src={screenshots[currentSlide]}
                        alt={`Screenshot ${currentSlide + 1}`}
                        className={styles.sliderImage}
                    />

                    <IconButton
                        icon={arrowIcon}
                        onClick={nextSlide}
                        className={styles.arrowRight}
                    />
                </div>

                <div className={styles.indicatorContainer}>
                    {screenshots.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.indicator} ${
                                index === currentSlide ? styles.indicatorActive : ''
                            }`}
                        />
                    ))}
                </div>
            </main>

            <footer className={styles.footerNav}>
                <BottomNav
                    label="Gameplay"
                    onClick={() => navigate('/gameplay')}
                />
            </footer>
        </div>
    );
};

export default ScreenshotsPage;