import { useState } from "react";
import React from "react";
import Searchbar from "./Searchbar";

function RecipeList({ onSelectRecipe }) {
    const recipes = [
        {
            id: 1,
            name: "Chocolate Cake",
            ingredients: ["200 gr Chocolate", "1l Milk", "2 Eggs", "1 tsp Vanilla", "1 tsp Sugar", "1 tsp Flour", "1 tsp Baking Powder", "1 tsp Salt", "1 tsp Baking Soda", "1 tsp Cinnamon"],
            instructions: ["Step 1", "Step 2"],
        },
        {
            id: 2,
            name: "Pancakes",
            ingredients: ["125g flour", " 2 tsp sugar", " 1/2 tsp salt", "2 tsp baking powder", "1 egg", "180ml Milk"],
            instructions: ["Step 3", "Step 4"],
        },
        {
            id: 3,
            name: "Muffins",
            ingredients: ["190g flour", "150g sugar", " 2tsp bakiung powder", "1 egg", "1tsp vanila extract", "80ml Milk"],
            instructions: ["Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"]
        },
        {
            id: 4,
            name: "Cookies",
            ingredients: ["200g butter", " 200g sugar", " 2 eggs"],
            instructions: ["Step 11", "Step 12"]
        }
    ];


    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes); // Initial state with all recipes
    const [favorites, setFavorites] = useState([]);

    const handleRecipeClick = (recipe) => {
        if (selectedRecipe && selectedRecipe.id === recipe.id) {
            setSelectedRecipe(null);
        } else {
            setSelectedRecipe(recipe);
        }
    };

    const toggleFavorite = (recipe) => {
        if (favorites.some(fav => fav.id === recipe.id)) {
            setFavorites(favorites.filter(fav => fav.id !== recipe.id));
        } else {
            setFavorites([...favorites, recipe]);
        }
    };

    const handleFilterRecipes = (searchTerm) => {
        const newFilteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRecipes(newFilteredRecipes); // Update filtered recipes state
        setSelectedRecipe(null); // Reset the selected recipe
    };


    function deleteFavorite(itemId) {
        // Filter out the item with the given id from the favorites list
        setFavorites(favorites.filter(fav => fav.id !== itemId));
       
    }
    return (
        <>
            <header className="Header">
                <div className="HeaderItems">
                    <Searchbar onFilterRecipes={handleFilterRecipes} />
                    
                </div>
            </header>
            <div className="App">
                <h1>Recipe App</h1>
                <h2 className="favorites">Favorites:</h2>
                <ul className="favoriteRecipes">
                    {favorites.map(fav => (
                        <li key={fav.id}>{fav.name}
                         <button onClick={() => deleteFavorite(fav.id)}  >X</button></li>
                        
                    ))}
                    
                </ul>
                <h2>All Recipes:</h2>
                <ul>
                    {filteredRecipes.map(recipe => (
                        <li className="recipe-item" key={recipe.id}
                            onClick={() => handleRecipeClick(recipe)}>
                            {recipe.name}
                            <button className="FavoriteBtn" onClick={() => toggleFavorite(recipe)}>
                                {favorites.some(fav => fav.id === recipe.id) ? "💔" : "❤️"}
                            </button>
                        </li>
                    ))}
                </ul>
                {selectedRecipe && (
                    <div>
                        <h2>{selectedRecipe.name}</h2>
                        <h3>Ingredients:</h3>
                        <ul>
                            {selectedRecipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4>Steps:</h4>
                        <ul>
                            {selectedRecipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default RecipeList