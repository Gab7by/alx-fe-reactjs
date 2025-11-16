import { useRecipeStore } from "./components/recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Recommended For You</h2>

      <button
        onClick={generateRecommendations}
        style={{ marginBottom: "15px" }}
      >
        Refresh Recommendations
      </button>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
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

export default RecommendationsList;
