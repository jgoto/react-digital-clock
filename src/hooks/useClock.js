import { useState, useEffect } from "react";

export function useClock(){
    const [time, setTime] = useState(new Date());
    const [ampm, setAmPm] = useState("");
    const [is24Hours, set24HourClock] = useState(false);

    function formatTime(date){
        let hours = date.getHours();
        if(!is24Hours){
            if(hours > 12){
                hours -= 12;
            }
        }
        else
            hours = String(hours).padStart(2, 0);

        const minutes = String(date.getMinutes()).padStart(2, 0);
        const seconds = String(date.getSeconds()).padStart(2, 0);
        return (
            hours+":"+minutes+":"+seconds+" "+ampm
        ).split("")
    }

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setTime(new Date());
            if(!is24Hours)
            {
                setAmPm((time.getHours() >= 12) ? "PM" : "AM");
            }
            else
                setAmPm("");
        }, 1000);
        return () => clearInterval(intervalId);
    }, [is24Hours]);

    return {
        'formattedTime': formatTime(time),
        'ampm': ampm,
        'is24Hours': is24Hours,
        set24HourClock
    };
}