import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from './CheckBox.module.css';

console.log(styles);

const CheckBox = ({ chekced, children, ...rest }) => {
    return (
        <div className={styles.checkbox}>
            <label>
                <input {...rest} type="checkbox" checked={chekced} />
                <div className={styles.icon}>{ chekced ? <MdCheckBox className={styles.checked} /> : <MdCheckBoxOutlineBlank /> }</div>
            </label>
            <span>{children}</span>
        </div>
    )
};

export default CheckBox;
