import { useState } from "react";
import AmPmSelect from "./AmPmSelect";
import Display from "./Display";

function Content(){
    return (
        <>
            <AmPmSelect />
            <Display />
        </>
    )
}

export default Content;