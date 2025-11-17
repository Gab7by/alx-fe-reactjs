import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // -----------------------------
  // SEARCH SYSTEM
  // -----------------------------
  searchTerm: "",

  setSearchTerm: (term) =>
    set(() => ({
      searchTerm: term,
    })),

  // -----------------------------
  // ADD / SET RECIPES
  // -----------------------------
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipesArray) =>
    set(() => ({
      recipes: recipesArray,
    })),

  // -----------------------------
  // UPDATE / DELETE RECIPES
  // -----------------------------
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipeId),
    })),

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
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      let recommended = [];

      if (favoriteRecipes.length > 0) {
        const keywords = favoriteRecipes
          .map((r) => r.title.toLowerCase().split(" "))
          .flat();

        recommended = state.recipes.filter((recipe) => {
          if (state.favorites.includes(recipe.id)) return false;
          return keywords.some((word) =>
            recipe.title.toLowerCase().includes(word)
          );
        });
      }

      if (recommended.length === 0) {
        recommended = state.recipes.filter(() => Math.random() > 0.6);
      }

      return { recommendations: recommended };
    }),
}));
