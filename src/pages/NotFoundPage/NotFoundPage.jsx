import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

import BottomNav from '../../components/ui/BottomNav/BottomNav';

import videoBg from '../../assets/backgrounds/introduction_bg.mp4';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <video autoPlay muted loop className={styles.videoBg}>
                <source src={videoBg} type="video/mp4" />
            </video>

            <main className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.subtitle}>Page Not Found</p>
            </main>

            <footer className={styles.footerNav}>
                <BottomNav
                    label="Return Home"
                    onClick={() => navigate('/')}
                />
            </footer>
        </div>
    );
};

export default NotFoundPage;