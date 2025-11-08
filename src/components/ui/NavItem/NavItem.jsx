import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from './NavItem.module.css';

const NavItem = ({ label, path }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
            }
        >
      <span className={styles.label}>
        {label}
      </span>
        </NavLink>
    );
};

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default NavItem;