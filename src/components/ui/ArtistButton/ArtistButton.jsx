import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ArtistButton.module.css';

const ArtistButton = ({to, img}) => {
    return (
        <Link
            to={to}
            className={styles.button}
            style={{backgroundImage: `url(${img})`}}
        />
    );
};

ArtistButton.propTypes = {
    to: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default ArtistButton;