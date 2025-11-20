export default function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail-container">
      <button className="back-button" type="button" onClick={onBack}>
        ← Back to Recipes
      </button>
      <div className="recipe-detail-card">
        <h2>{recipe.name}</h2>
        <p className="recipe-category">{recipe.category}</p>
        <p className="recipe-description">{recipe.description}</p>
        <div className="detail-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="detail-section">
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
