import { useState } from "react";
import AmPmSelect from "./AmPmSelect";
import TimeModeSelect from "./TimeModeSelect";
import Display from "./Display";

function Content(){
    return (
        <div className="content">
            <Display />
        </div>
    )
}

export default Content;