import React, { useState, useEffect } from "react";

function Darkmode() {


    /* True = start with Dark
       False = start with Light */
    const [mode, setMode] = useState(false)

    function toggleMode() {
        setMode(!mode)
    }



    useEffect(() => {
        document.body.className = mode ? 'darkMode' : 'lightMode';
        console.log("Mode has changed")
    }, [mode]);
    return (
        <>
            <div className={mode ? 'darkMode' : 'lightMode'}>
                <button className="ThemeBtn"
                    onClick={mode ? toggleMode : toggleMode}>
                    {mode ? "Lightmode" : "Darkmode"}
                </button>
               
                {/* Rest of your app */}
            </div>
        </>
    )
}


export default Darkmode;