import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // -----------------------------
  // FAVORITES SYSTEM
  // -----------------------------
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => {
      if (state.favorites.includes(recipeId)) return state;
      return { favorites: [...state.favorites, recipeId] };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // -----------------------------
  // RECOMMENDATIONS SYSTEM
  // -----------------------------
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation logic:
      // Recommend recipes with shared keywords in title
      // or randomly if user has many favorites.
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      let recommended = [];

      if (favoriteRecipes.length > 0) {
        const keywords = favoriteRecipes
          .map((r) => r.title.toLowerCase().split(" "))
          .flat();

        recommended = state.recipes.filter((recipe) => {
          if (state.favorites.includes(recipe.id)) return false; // don’t recommend already-favorited
          return keywords.some((word) =>
            recipe.title.toLowerCase().includes(word)
          );
        });
      }

      // Fallback: random recommendations
      if (recommended.length === 0) {
        recommended = state.recipes.filter(() => Math.random() > 0.6);
      }

      return { recommendations: recommended };
    }),
}));
