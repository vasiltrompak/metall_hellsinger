import React, {useEffect} from 'react';
import styles from './ArtistsPage.module.css'

import ArtistButton from '../../components/ui/ArtistButton/ArtistButton';

import videoBg from '../../assets/backgrounds/artists_bg.mp4';
import titleImg from '../../assets/artists/artists_title.png';

import alissa_img from '../../assets/artists/alissa_white_gluz.png';
import bjorn_img from '../../assets/artists/bjorn_strid.png';
import christina_img from '../../assets/artists/christina_scabbia.png';
import dennis_img from '../../assets/artists/dennis_lyxen.png';
import james_img from '../../assets/artists/james_dorton.png';
import matt_img from '../../assets/artists/matt_heafy.png';
import mikael_img from '../../assets/artists/mikael_stanne.png';
import randy_img from '../../assets/artists/randy_blythe.png';
import serj_img from '../../assets/artists/serj_tankian.png';
import tatiana_img from '../../assets/artists/tatiana_shmayluk.png';
import will_ramos_img from '../../assets/artists/will_ramos.png';

const artistsData = [
    {id: 'tatiana', name: 'Tatiana Shmayluk', img: tatiana_img},
    {id: 'bjorn', name: 'Björn Strid', img: bjorn_img},
    {id: 'matt', name: 'Matt Heafy', img: matt_img},
    {id: 'mikael', name: 'Mikael Stanne', img: mikael_img},
    {id: 'serj', name: 'Serj Tankian', img: serj_img},
    {id: 'dennis', name: 'Dennis Lyxzén', img: dennis_img},
    {id: 'randy', name: 'Randy Blythe', img: randy_img},

    {id: 'alissa', name: 'Alissa White-Gluz', img: alissa_img},
    {id: 'james', name: 'James Dorton', img: james_img},
    {id: 'christina', name: 'Christina Scabbia', img: christina_img},
    {id: 'will', name: 'Will Ramos', img: will_ramos_img},
];

const topRow = artistsData.slice(0, 7);
const bottomRow = artistsData.slice(7);

const ArtistsPage = () => {
    useEffect(() => {
        document.title = 'Metal Hellsinger - Artists';
    }, []);

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
                                img={artist.img}
                            />
                        ))}
                    </div>
                    <div className={styles.row}>
                        {bottomRow.map(artist => (
                            <ArtistButton
                                key={artist.id}
                                to={`/artists/${artist.id}`}
                                img={artist.img}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ArtistsPage;