import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './AuthPage.module.css';

import {useTitle} from "../../hooks/useTitle.js";

import AuthInput from '../../components/ui/AuthInput/AuthInput';
import AuthButton from '../../components/ui/AuthButton/AuthButton';
import AuthLink from '../../components/ui/AuthLink/AuthLink';
import IconButton from '../../components/ui/IconButton/IconButton';

import videoBg from '../../assets/backgrounds/register_login_bg.mp4';
import formFrameImg from '../../assets/register_login/plate.png';
import titleImg from '../../assets/introduction/metallhellsinger_title.png';
import closeIcon from '../../assets/menu/close_button.png';

const AuthPage = () => {
    useTitle('Metal: Hellsinger - Authentication');

    const navigate = useNavigate();
    const [isLoginView, setIsLoginView] = useState(true);

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const {userName, email, password, confirmPassword} = formData;

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setFormData({userName: '', email: '', password: '', confirmPassword: ''});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoginView) {
            console.log('Logging in with:', {email, password});
        } else {
            console.log('Registering with:', {userName, email, password});
        }
        navigate('/');
    };

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

            <main className={styles.authContainer}>
                <img src={titleImg} alt="Metal Hellsinger" className={styles.titleLogo}/>

                <div
                    className={styles.formFrame}
                    style={{backgroundImage: `url(${formFrameImg})`}}
                >
                    <form className={styles.form} onSubmit={handleSubmit}>

                        {!isLoginView && (
                            <AuthInput
                                label="User Name"
                                name="userName"
                                value={userName}
                                onChange={handleChange}
                            />
                        )}

                        <AuthInput
                            label="E-Mail Address"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <AuthInput
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />

                        {!isLoginView && (
                            <AuthInput
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                            />
                        )}

                        {isLoginView ? (
                            <>
                                <AuthButton type="submit">Login</AuthButton>
                                <AuthLink onClick={toggleView}>Create account</AuthLink>
                            </>
                        ) : (
                            <>
                                <AuthButton type="submit">Register</AuthButton>
                                <AuthLink onClick={toggleView}>I have account already</AuthLink>
                            </>
                        )}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AuthPage;