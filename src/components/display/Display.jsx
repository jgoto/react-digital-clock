import { useState } from "react";
import DigitTile from "./DigitTile";
import styles from "./Display.module.css";
import TimeModeSelect from "./TimeModeSelect";
import { useClock } from "../../hooks/useClock";

function Display(){
    const { formattedTime, is24Hours, set24HourClock } = useClock();
    
    return (
        <div>
            <div className={styles.clockDisplay}>
                { 
                formattedTime.map((char, index)=><DigitTile key = {index} char = {char} />)
                }
            </div>
            <TimeModeSelect is24Hours={is24Hours} set24HourClock={set24HourClock} />
        </div>
        
    )
}

export default Display;