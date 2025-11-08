import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import IconButton from '../../ui/IconButton/IconButton';
import accountIcon from '../../../assets/menu/account.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/auth">
                <IconButton
                    icon={accountIcon}
                    className={styles.headerButton}
                />
            </Link>
        </header>
    );
};

export default Header;