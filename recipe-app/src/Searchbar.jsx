import React, { useEffect, useState } from "react";
import { HotKeys } from 'react-hotkeys';

function Searchbar({ onFilterRecipes }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        onFilterRecipes(newSearchTerm);
    };

    const deleteSearchBtn = () => {
        setSearchTerm("");
        onFilterRecipes("");
    };


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === "ö") {
                console.log("Manual key listener triggered!");
                setSearchTerm("");
                onFilterRecipes("");
            }
        };
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return (
       
            <div className="Searchbar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button title="ctrl+ö" onClick={deleteSearchBtn} className="searchDeleteBtn">x</button>
            </div>
        
    );
}

export default Searchbar;
