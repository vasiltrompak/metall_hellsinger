import React, {useEffect} from 'react';
import styles from './IntroductionPage.module.css';

import videoBg from '../../assets/backgrounds/introduction_bg.mp4';
import titleImg from '../../assets/introduction/metallhellsinger_title.png';
import buyNowImg from '../../assets/introduction/buy_now.png';

const IntroductionPage = () => {
    useEffect(()=>{
        document.title = "Metal: Hellsinger - Introduction";
    }, [])

    return (
        <div className={styles.page}>
            <video autoPlay muted loop className={styles.videoBg}>
                <source src={videoBg} type="video/mp4" />
            </video>

            <main className={styles.content}>
                <img src={titleImg} alt="Metal Hellsinger" className={styles.title} />
                <a
                    href="https://store.steampowered.com/app/1061910/Metal_Hellsinger/"
                    className={styles.buyButton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={buyNowImg} alt="Buy Now"/>
                </a>
            </main>
        </div>
    );
};

export default IntroductionPage;