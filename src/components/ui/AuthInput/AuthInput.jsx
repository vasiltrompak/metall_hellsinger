import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthInput.module.css";

const AuthInput = ({label, type = 'text', name, value, onChange}) => {
    return (
        <div className={styles.inputGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
                required
            />
        </div>
    )
};

AuthInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default AuthInput;