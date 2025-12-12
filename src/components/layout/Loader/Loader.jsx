import React from 'react';
import styles from './Loader.module.css';

import loadingGif from '/loading.webp';

const Loader = () => {
    return (
        <div className={styles.loaderBackdrop}>
            <img
                src={loadingGif}
                alt="Завантаження..."
                className={styles.loaderImage}
            />
        </div>
    );
};

export default Loader;