import { useState } from "react";
import styles from './DigitTile.module.css';

function DigitTile({digit}){
    return (
        <div className={styles.digitTile}>
            {digit}
        </div>
    )
}

export default DigitTile;