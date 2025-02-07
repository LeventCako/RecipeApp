import React, { useState, useEffect } from "react";

function Darkmode() {



    const [mode, setMode] = useState(true)

    function toggleMode() {
        setMode(!mode)
    }



    useEffect(() => {
        document.body.className = mode ? 'darkMode' : 'lightMode';
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