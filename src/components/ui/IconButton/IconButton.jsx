import React from 'react';
import PropTypes from "prop-types";
import styles from './IconButton.module.css';

const IconButton = ({ icon, onClick, className = '' }) => {
    // const handleClick = (e) => {
    //     console.log('IconButton clicked');
    //
    //     if(onClick){
    //         onClick(e);
    //     }
    // };

    return (
        <button
            onClick={onClick}
            className={`${styles.iconButton} ${className}`}
        >
            <img src={icon} alt="" />
        </button>
    );
};

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default IconButton;