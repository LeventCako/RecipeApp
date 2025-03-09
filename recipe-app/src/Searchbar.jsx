import React, { useEffect, useState } from "react";

function Searchbar({onFilterRecipes}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        onFilterRecipes(newSearchTerm); // Pass updated term to parent
    }


    const deleteSearchBtn = (e) => {
        const newSearchTerm = e.target.value;
     setSearchTerm("");
     setSearchTerm(newSearchTerm);
        onFilterRecipes(newSearchTerm);
    }

    return (

        <div className="Searchbar">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange} 
                />
                <button onClick={deleteSearchBtn} className="searchDeleteBtn">x</button>
        </div>
    )
}

export default Searchbar;