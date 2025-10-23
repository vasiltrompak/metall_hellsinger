import React from 'react';
import PropTypes from "prop-types";

import styles from './Header.module.css';
import IconButton from '../../ui/IconButton/IconButton';
import accountIcon from '../../../assets/menu/account.png';

const Header = ({activePage}) => {
    return (
        <header className={styles.header}>
            {activePage === 'intro' && (
                <IconButton
                    icon={accountIcon}
                    className={styles.headerButton}
                />
            )}
        </header>
    );
};

Header.propTypes = {
    activePage: PropTypes.string.isRequired,
};

export default Header;