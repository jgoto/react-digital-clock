import { useState } from "react";
import styles from './TimeModeSelect.module.css';

function TimeModeSelect({is24Hours, set24HourClock}){
    return (
        <>
            <fieldset className={styles.timeSelect}>
                <input type = "radio" name="time-mode" value="12" checked={is24Hours===false}
                    onChange={() => set24HourClock(false)} />
                <label>12 Hour</label>
                <input type = "radio" name="time-mode" value="24" checked={is24Hours===true}
                    onChange={() => set24HourClock(true)} />
                <label>24 Hour</label>
            </fieldset>            
        </>
    )
}

export default TimeModeSelect;