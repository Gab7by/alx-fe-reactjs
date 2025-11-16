import { Link, useParams } from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: "20px" }}>
        <h3>Edit Recipe</h3>
        <EditRecipeForm recipe={recipe} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
