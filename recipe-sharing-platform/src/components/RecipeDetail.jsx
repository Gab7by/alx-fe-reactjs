import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center text-xl font-semibold mt-10">
        Recipe not found 👀
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-600 hover:underline text-lg font-medium"
      >
        ← Back to Home
      </Link>

      {/* Recipe Title */}
      <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
        {recipe.title}
      </h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-2xl shadow-md"
      />

      {/* Description */}
      <p className="text-gray-700 text-lg mt-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Ingredients:
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Instructions:
        </h2>
        <ol className="list-decimal ml-6 text-gray-700 space-y-2">
          <li>Step 1: Lorem ipsum dolor sit amet.</li>
          <li>Step 2: Consectetur adipiscing elit.</li>
          <li>Step 3: Sed do eiusmod tempor incididunt.</li>
        </ol>
      </div>
    </div>
  );
}
