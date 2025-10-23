import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthButton.module.css";

const AuthButton = ({children, onClick, type = 'submit'}) => {
    return (
        <button type={type} onClick={onClick} className={styles.authButton}>
            {children}
        </button>
    );
}

AuthButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default AuthButton;