import { useRecipeStore } from "./components/recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
      style={{
        marginTop: "10px",
        padding: "8px 15px",
        cursor: "pointer",
      }}
    >
      {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
