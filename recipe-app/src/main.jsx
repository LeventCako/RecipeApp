import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecipeList from './recipeList.jsx'
import FavoriteRecipes from './favoriteRecipes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RecipeList></RecipeList>
    <FavoriteRecipes></FavoriteRecipes>
  </StrictMode>,
)
