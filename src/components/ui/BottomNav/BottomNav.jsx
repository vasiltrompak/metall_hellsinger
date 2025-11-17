import React from 'react';
import PropTypes from "prop-types";
import styles from './BottomNav.module.css';

import navIcon from '../../../assets/menu/next_page_button.webp';

const BottomNav = ({ label, onClick }) => {
    return (
        <button className={styles.navButton} onClick={onClick}>
            <span className={styles.label}>{label}</span>
            <img src={navIcon} alt={label} className={styles.icon} />
        </button>
    );
};

BottomNav.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default BottomNav;