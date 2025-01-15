import { useState } from 'react'
import RecipeList from './recipeList.jsx'
import FavoriteRecipes from './favoriteRecipes.jsx'

function App() {
 
  return(<>
  <h1>Recipe App</h1>
  <RecipeList></RecipeList>
  <FavoriteRecipes></FavoriteRecipes>
  </>)
}

export default App
