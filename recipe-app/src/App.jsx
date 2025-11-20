import { useState } from "react";
import { RecipeData } from "./recipeData";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSelectRecipe = (recipe) => setSelectedRecipe(recipe);
  const handleBackToList = () => setSelectedRecipe(null);
  const filteredRecipes = RecipeData.filter((recipe) => {
    const term = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      (recipe.category && recipe.category.toLowerCase().includes(term))
    );
  });
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Dessert Recipe Finder</h1>
        <p>Search tasty cookies, brownies, cupcakes & cake.</p>
      </header>
      {!selectedRecipe && (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search desserts..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <RecipeList
            recipes={filteredRecipes}
            onSelectRecipe={handleSelectRecipe}
          />
        </>
      )}
      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
      )}
    </div>
  );
}
