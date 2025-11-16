import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './ArtistsPage.module.css'

import {useFetch} from "../../hooks/useFetch.js";
import {useTitle} from "../../hooks/useTitle.js";

import ArtistButton from '../../components/ui/ArtistButton/ArtistButton';

import videoBg from '../../assets/backgrounds/artists_bg.mp4';
import titleImg from '/assets/artists/artists_title.png';

const ArtistsPage = () => {
    const navigate = useNavigate();

    useTitle('Metal: Hellsinger - Artists');

    const {data: artists, loading, error} = useFetch('http://localhost:3001/artists');

    if (loading) {
        return <div className={styles.loadingText}>Завантаження...</div>;
    }

    if (error) {
        navigate('/404');
        return null;
    }

    const topRow = artists ? artists.slice(0, 7) : [];
    const bottomRow = artists ? artists.slice(7) : [];

    return (
        <div className={styles.page}>
            <video autoPlay muted loop className={styles.videoBg}>
                <source src={videoBg} type="video/mp4"/>
            </video>

            <main className={styles.content}>
                <img src={titleImg} alt="Artists" className={styles.title}/>

                <div className={styles.artistsGrid}>
                    <div className={styles.row}>
                        {topRow.map(artist => (
                            <ArtistButton
                                key={artist.id}
                                to={`/artists/${artist.id}`}
                                img={artist.gridImage}
                            />
                        ))}
                    </div>
                    <div className={styles.row}>
                        {bottomRow.map(artist => (
                            <ArtistButton
                                key={artist.id}
                                to={`/artists/${artist.id}`}
                                img={artist.gridImage}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ArtistsPage;