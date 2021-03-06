import React from 'react';
import styles from './Button.modal.css'

const Button = (props) => {
    return (
        <button
            disabled={props.disabled}
            className={[styles.Button, styles[props.buttonType] ].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default Button;