import styles from './DigitTile.module.css';

function DigitTile({char}){
    return (
        <div className={styles.digitTile}>
            {char}
        </div>
    )
}

export default DigitTile;