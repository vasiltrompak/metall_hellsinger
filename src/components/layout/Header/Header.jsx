import React from 'react';
import PropTypes from "prop-types";

import styles from './Header.module.css';
import IconButton from '../../ui/IconButton/IconButton';
import accountIcon from '../../../assets/menu/account.png';

const Header = ({activePage, onAccountClick}) => {
    return (
        <header className={styles.header}>
            {activePage === 'intro' && (
                <IconButton
                    icon={accountIcon}
                    onClick={onAccountClick}
                    className={styles.headerButton}
                />
            )}
        </header>
    );
};

Header.propTypes = {
    activePage: PropTypes.string.isRequired,
    onAccountClick: PropTypes.func,
};

Header.defaultProps = {
    onAccountClick: () => {},
}

export default Header;