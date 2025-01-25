import React, { useEffect, useState } from "react";

function Searchbar({onFilterRecipes}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        onFilterRecipes(newSearchTerm); // Pass updated term to parent
    }


    return (

        <div className="Searchbar">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange} />
        </div>
    )
}

export default Searchbar;