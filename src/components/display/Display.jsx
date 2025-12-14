import { useState } from "react";
import DigitTile from "./DigitTile";
import styles from "./Display.module.css";
import TimeModeSelect from "./TimeModeSelect";
import { useClock } from "../../hooks/useClock";

function Display(){
    const { time, formattedTime, is24Hours, set24HourClock } = useClock();
    
    return (
        <div>
            <div className={styles.clockDisplay}>
                { 
                formattedTime
                }
            </div>
            <TimeModeSelect is24Hours={is24Hours} set24HourClock={set24HourClock} />
        </div>
        
    )
}

export default Display;