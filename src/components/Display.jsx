import { useState, useEffect } from "react";
import DigitTile from "./DigitTile";
import styles from "./Display.module.css";

function Display(){
    const [date, setTime] = useState(new Date())

    function formatTime(date, is24Hours = true){
        const hours = String(date.getHours()).padStart(2,0);
        const minutes = String(date.getMinutes()).padStart(2,0);
        const seconds = String(date.getSeconds()).padStart(2,0);
        return (hours+":"+minutes+":"+seconds).split("");
    }
    
    const digitValues = formatTime(date);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);
        return () => clearInterval(intervalId);
    },[]);
    
    return (
        <div className={styles.clockDisplay}>
            { digitValues.map((digit,index)=><DigitTile key={index} digit={digit} className="digit" /> )}
        </div>
    )
}

export default Display;