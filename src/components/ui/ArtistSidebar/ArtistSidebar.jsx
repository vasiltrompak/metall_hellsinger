import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from './ArtistSidebar.module.css';

import {useFetch} from '../../../hooks/useFetch';

import Loader from "../../layout/Loader/Loader.jsx";

const ArtistSidebar = () => {
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;
    const {data: artistsData, loading, error} = useFetch(`${apiUrl}/artists/`);

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        navigate('/404');
        return null;
    }

    return (
        <nav className={styles.sidebar}>
            {artistsData && artistsData.map(artist => (
                <NavLink
                    key={artist.id}
                    to={`/artists/${artist.id}`}
                    className={({isActive}) =>
                        `${styles.button} ${isActive ? styles.active : ''}`
                    }
                >
                    <img
                        src={artist.btnOff}
                        alt={artist.name}
                        className={styles.imgOff}
                    />
                    <img
                        src={artist.btnOn}
                        alt={artist.name}
                        className={styles.imgOn}
                    />
                </NavLink>
            ))}
        </nav>
    );
};

export default ArtistSidebar;