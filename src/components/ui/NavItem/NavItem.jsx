import React from 'react';
import PropTypes from "prop-types";
import styles from './NavItem.module.css';

const NavItem = ({ isActive, href = '#', onClick, label }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
        >
            <span className={styles.label}>
        {label}
      </span>
        </a>
    );
};

NavItem.propTypes = {
    isActive: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
}

export default NavItem;