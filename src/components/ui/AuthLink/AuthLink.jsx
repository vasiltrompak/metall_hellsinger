import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthLink.module.css';

const AuthLink = ({ children, onClick }) => {
    return (
        <button type="button" onClick={onClick} className={styles.authLink}>
            {children}
        </button>
    );
};

AuthLink.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default AuthLink;