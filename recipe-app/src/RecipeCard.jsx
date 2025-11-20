export default function RecipeCard({ recipe, onSelectRecipe }) {
  return (
    <div className="recipe-card" onClick={() => onSelectRecipe(recipe)}>
      <h2>{recipe.name}</h2>
      <p className="recipe-category">{recipe.category}</p>
      <p className="recipe-description">{recipe.description}</p>
      <button className="view-details-button" type="button">
        View Details
      </button>
    </div>
  );
}
