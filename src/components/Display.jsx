import { useState, useEffect } from "react";
import DigitTile from "./DigitTile";

function Display(){
    const [date, setTime] = useState(new Date())
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const digitValues = (hours+minutes).split("");

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);
        return () => clearInterval(intervalId);
    },[]);
    
    return (
        <>
            { digitValues.map((digit,index)=><DigitTile key={index} digit={digit} /> )}
        </>
    )
}

export default Display;