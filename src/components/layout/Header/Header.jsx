import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import styles from './Header.module.css';
import IconButton from '../../ui/IconButton/IconButton';
import accountIcon from '../../../assets/menu/account.webp';

const Header = () => {
    const location = useLocation();

    const showIcon = location.pathname === '/';

    return (
        <header className={styles.header}>
            {showIcon && (
                <Link to="/auth">
                    <IconButton
                        icon={accountIcon}
                        className={styles.headerButton}
                    />
                </Link>
            )}
        </header>
    );
};

export default Header;