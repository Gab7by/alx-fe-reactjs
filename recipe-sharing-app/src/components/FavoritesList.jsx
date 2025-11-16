import { useRecipeStore } from "./components/recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>You have no favorite recipes yet.</p>}

      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "15px" }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
