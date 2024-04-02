import React, {ChangeEvent, useContext, useState} from "react";
import DarkModeContext from "./DarkModeContext";

interface Props{

}

function Toolbar() {
    const{darkMode,setDarkMode}=useContext(DarkModeContext)
    const handleDarkMode = (e:ChangeEvent<HTMLInputElement>) => {
        setDarkMode(e.target.checked)
    }

    return(
        <>
            <div style={{display:"flex",justifyContent:"end",margin:"10px"}}>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleDarkMode}
                />
            </div>
        </>
    )
}

export default Toolbar;