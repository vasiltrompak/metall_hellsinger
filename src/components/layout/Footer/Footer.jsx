import React from 'react';
import PropTypes from "prop-types";

import IconButton from '../../ui/IconButton/IconButton';

import styles from './Footer.module.css';

import playMusicIcon from '../../../assets/menu/play_music_button.png';
import logoRevealIcon from '../../../assets/menu/logo_reveal_button.png';

const Footer = ({activePage, onLogoRevealClick}) => {
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
                icon={playMusicIcon}
                onClick={() => console.log('Play music')}
                className={styles.footerButton}
            />
        </footer>
    );
};

Footer.propTypes = {
    activePage: PropTypes.string.isRequired,
    onLogoRevealClick: PropTypes.func,
};

Footer.defaultProps = {
    onLogoRevealClick: () => {},
}

export default Footer;