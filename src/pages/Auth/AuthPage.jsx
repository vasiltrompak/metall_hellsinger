import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './AuthPage.module.css';

import {useTitle} from "../../hooks/useTitle.js";

import AuthInput from '../../components/ui/AuthInput/AuthInput';
import AuthButton from '../../components/ui/AuthButton/AuthButton';
import AuthLink from '../../components/ui/AuthLink/AuthLink';
import IconButton from '../../components/ui/IconButton/IconButton';

import videoBg from '../../assets/backgrounds/register_login_bg.mp4';
import formFrameImg from '../../assets/register_login/plate.webp';
import titleImg from '../../assets/introduction/metallhellsinger_title.webp';
import closeIcon from '../../assets/menu/close_button.webp';

const AuthPage = () => {
    useTitle('Metal: Hellsinger - Authentication');

    const navigate = useNavigate();
    const [isLoginView, setIsLoginView] = useState(true);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/auth/check`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                if (data.loggedIn) {
                    navigate('/profile');
                }
            })
            .catch(err => console.error("Помилка перевірки:", err));
    }, [navigate, apiUrl]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userName.trim() || !password.trim()) {
            alert("Будь ласка, заповніть всі поля!");
            return;
        }

        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(userName)) {
            alert("Ім'я користувача має бути від 3 до 20 символів і містити лише букви, цифри або '_'");
            return;
        }

        if (!isLoginView) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Введіть коректний Email!");
                return;
            }
        }

        const passwordDigitRegex = /\d/;
        if (password.length < 6) {
            alert("Пароль має бути не менше 6 символів!");
            return;
        }

        if (!isLoginView && !passwordDigitRegex.test(password)) {
            alert("Пароль має містити хоча б одну цифру!");
            return;
        }

        if (!isLoginView && password !== confirmPassword) {
            alert("Паролі не співпадають!");
            return;
        }

        const endpoint = isLoginView ? '/login' : '/register';

        const payload = isLoginView
            ? {username: userName, password}
            : {username: userName, email, password};

        try {
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
                credentials: 'include'
            });

            const data = await response.json();

            if (data.success) {
                if (isLoginView) {
                    navigate('/profile');
                } else {
                    alert('Registration successful! Please login.');
                    setIsLoginView(true);
                }
            } else {
                alert(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Auth error:', error);
            alert('Server connection error');
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

                        <AuthInput
                            label="User Name"
                            name="userName"
                            value={userName}
                            onChange={handleChange}
                        />

                        {!isLoginView && (
                            <AuthInput
                                label="E-Mail Address"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        )}

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