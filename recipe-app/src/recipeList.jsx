import { useState } from "react";
import React from "react";
import Searchbar from "./Searchbar";
import recipes from './recipeData.jsx'

function RecipeList({ onSelectRecipe }) {
   

    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes); // Initial state with all recipes
    const [favorites, setFavorites] = useState([]);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

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


    function openFavorites() {
        setIsFavoritesOpen(!isFavoritesOpen);
    }
    return (
        <>
       
            <header className="Header">
                <div className="HeaderItems">
                    <Searchbar onFilterRecipes={handleFilterRecipes} />
                    
                </div>
                <div>
                <h2 className="favorites" title="Favorites" onClick={openFavorites}>💟</h2>
                </div>
               
            </header>
            <div className="App">
                <h1>Recipe App</h1>
                <div className={`favorites-box ${isFavoritesOpen ? 'show' : ''}`}>
                <ul className="favoriteRecipes">
                    {favorites.map(fav => (
                        <li key={fav.id}>{fav.name}
                         <button onClick={() => deleteFavorite(fav.id)}  >X</button></li>
                        
                    ))}
                    
                </ul>
                </div>
               
                
                
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