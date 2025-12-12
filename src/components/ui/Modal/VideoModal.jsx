import React from 'react';
import PropTypes from "prop-types";

import styles from './VideoModal.module.css';
import IconButton from '../IconButton/IconButton';

import closeIcon from '../../../assets/menu/close_button.webp';

const VideoModal = ({show, onClose, videoId, localVideo}) => {
    if (!show) {
        return null;
    }

    let videoContent;
    if (videoId) {
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
        videoContent = (
            <iframe
                src={youtubeEmbedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className={styles.videoPlayer}
            />
        );
    } else if (localVideo) {
        videoContent = (
            <video
                src={localVideo}
                className={styles.videoPlayer}
                controls
            >
                Ваш браузер не підтримує тег video.
            </video>
        );
    } else {
        videoContent = <p>Помилка: відео не знайдено.</p>
    }

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <IconButton
                    icon={closeIcon}
                    onClick={onClose}
                    className={styles.closeButton}
                />
                {videoContent}
            </div>
        </div>
    );
};

VideoModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    videoId: PropTypes.string,
    localVideo: PropTypes.string
};

export default VideoModal;