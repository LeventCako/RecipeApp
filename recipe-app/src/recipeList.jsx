import { useState } from "react";
import React from "react";

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
        }
    ];
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleRecipeClick = (recipe) => {
        if(selectedRecipe && selectedRecipe.id === recipe.id) {
            setSelectedRecipe(null);
        } else {
            setSelectedRecipe(recipe);
        }
    }



        return (
            <>
                <div className="App">
                    <ul> {recipes.map(recipe => (
                        <li key={recipe.id}
                            onClick={() => handleRecipeClick(recipe)}>
                            {recipe.name}
                        </li>))}
                    </ul> {selectedRecipe && (
                        <div>
                            <h2>{selectedRecipe.name}</h2>
                            <h3>Ingredients:</h3>
                            <ul> {selectedRecipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>))}
                               
                            </ul>
                            <h4>Steps:</h4>
                            <ul>
                                {selectedRecipe.instructions.map((instruction, index) =>(
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ul>
                        </div>)}
                </div>
            </>
        );
    }

export default RecipeList;