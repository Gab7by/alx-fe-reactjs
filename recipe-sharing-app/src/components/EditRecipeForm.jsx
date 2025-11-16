import { useState } from "react";
import { useRecipeStore } from "./components/recipeStore";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ id: recipe.id, title, description });
    // Optionally navigate back to details or list
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button type="submit">Save Changes</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
