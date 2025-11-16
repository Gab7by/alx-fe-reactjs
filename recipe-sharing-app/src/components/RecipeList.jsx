import { Link } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const allRecipes = useRecipeStore((state) => state.recipes);

  // Show all recipes if no search yet (first load)
  const recipesToDisplay =
    searchTerm.trim() === "" ? allRecipes : filteredRecipes;

  return (
    <div>
      <h2>Recipes</h2>

      {recipesToDisplay.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        recipesToDisplay.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "15px" }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
