import React from 'react';
import {NavLink} from 'react-router-dom';
import {artistsData} from '../../../data/artistsData';
import styles from './ArtistSidebar.module.css';

const ArtistSidebar = () => {
    return (
        <nav className={styles.sidebar}>
            {artistsData.map(artist => (
                <NavLink
                    key={artist.id}
                    to={`/artists/${artist.id}`}
                    className={({ isActive }) =>
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