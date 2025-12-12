import React from 'react';
import PropTypes from "prop-types";

import IconButton from '../../ui/IconButton/IconButton';

import styles from './Footer.module.css';

import musicIconOn from '../../../assets/menu/play_music_button_on.webp';
import musicIconOff from '../../../assets/menu/play_music_button.webp';
import logoRevealIcon from '../../../assets/menu/logo_reveal_button.webp';

const Footer = ({activePage, onLogoRevealClick, isMusicPlaying, onMusicToggle}) => {
    // console.log('Footer rendered with onLogoRevealClick:', onLogoRevealClick);

    return (
        <footer className={styles.footer}>
            {activePage === 'intro' && (
                <IconButton
                    icon={logoRevealIcon}
                    onClick={onLogoRevealClick}
                    className={styles.footerButton}
                />
            )}
            <IconButton
                icon={isMusicPlaying ? musicIconOn : musicIconOff}
                onClick={onMusicToggle}
                className={styles.footerButton}
            />
        </footer>
    );
};

Footer.propTypes = {
    activePage: PropTypes.string.isRequired,
    onLogoRevealClick: PropTypes.func,
    isMusicPlaying: PropTypes.bool.isRequired,
    onMusicToggle: PropTypes.func.isRequired
};

Footer.defaultProps = {
    onLogoRevealClick: () => {},
}

export default Footer;