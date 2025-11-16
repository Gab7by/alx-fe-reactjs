import { useRecipeStore } from "./components/recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this recipe?")) return;
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
