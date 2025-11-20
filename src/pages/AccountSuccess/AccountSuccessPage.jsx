import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './AccountSuccessPage.module.css';

import {useTitle} from "../../hooks/useTitle.js";
import IconButton from '../../components/ui/IconButton/IconButton';

import videoBg from '../../assets/backgrounds/register_login_bg.mp4';
import formFrameImg from '../../assets/register_login/plate.webp';
import titleImg from '../../assets/introduction/metallhellsinger_title.webp';
import closeIcon from '../../assets/menu/close_button.webp';

import inputBg from '../../assets/register_login/bg_form_input.webp';

import buttonFrame from '../../assets/modding/package_frame.webp';

import checkboxOff from '../../assets/menu/icon_menu_off_button.webp';
import checkboxOn from '../../assets/menu/icon_menu_on_button.webp';

const AccountSuccessPage = () => {
    useTitle('Metal: Hellsinger - Account Success');
    const navigate = useNavigate();

    const [agreedMetal, setAgreedMetal] = useState(true);
    const [agreedFuncom, setAgreedFuncom] = useState(false);

    return (
        <div className={styles.page}>
            <video autoPlay muted loop className={styles.videoBg}>
                <source src={videoBg} type="video/mp4"/>
            </video>

            <IconButton
                icon={closeIcon}
                onClick={() => navigate('/')}
                className={styles.closeButton}
            />

            <main className={styles.container}>
                <img src={titleImg} alt="Metal Hellsinger" className={styles.titleLogo}/>

                <div
                    className={styles.frame}
                    style={{backgroundImage: `url(${formFrameImg})`}}
                >
                    <div className={styles.content}>

                        <h2 className={styles.subTitle}>You logined as:</h2>

                        <div
                            className={styles.emailHolder}
                            style={{backgroundImage: `url(${inputBg})`}}
                        >
                            exemple@mail.com
                        </div>

                        <div className={styles.agreements}>

                            <div
                                className={styles.checkboxRow}
                                onClick={() => setAgreedMetal(!agreedMetal)}
                            >
                                <img
                                    src={agreedMetal ? checkboxOn : checkboxOff}
                                    alt="checkbox"
                                    className={styles.checkboxImg}
                                />

                                <p className={styles.checkboxText}>
                                    I agree that Funcom can send me e-mails <br/>
                                    and offers about Metal: Hellsinger
                                </p>
                            </div>

                            <div
                                className={styles.checkboxRow}
                                onClick={() => setAgreedFuncom(!agreedFuncom)}
                            >
                                <img
                                    src={agreedFuncom ? checkboxOn : checkboxOff}
                                    alt="checkbox"
                                    className={styles.checkboxImg}
                                />

                                <p className={styles.checkboxText}>
                                    I agree that Funcom can send me e-mails and offers about other Funcom games<br/>
                                </p>
                            </div>
                        </div>

                        <button className={styles.assetButton}>
                            <img src={buttonFrame} alt="" className={styles.btnFrameImg}/>
                            <span className={styles.btnText}>BECOME A FOLLOWER</span>
                        </button>

                        <button onClick={() => navigate('/')} className={styles.logoutLink}>
                            Logout
                        </button>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountSuccessPage;