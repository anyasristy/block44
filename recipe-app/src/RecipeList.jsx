import RecipeCard from "./RecipeCard";
export default function RecipeList({ recipes, onSelectRecipe }) {
  if (recipes.length === 0) {
    return (
      <div className="no-results">
        <p>No recipes found. Try a different search term.</p>
      </div>
    );
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelectRecipe={onSelectRecipe}
        />
      ))}
    </div>
  );
}

