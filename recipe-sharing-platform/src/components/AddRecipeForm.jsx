import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let validate = {};

    if (!title.trim()) validate.title = "Recipe title is required.";
    if (!ingredients.trim()) validate.ingredients = "Please add ingredients.";
    if (!steps.trim()) validate.steps = "Please add preparation steps.";

    if (Object.keys(validate).length > 0) {
      setErrors(validate);
      return;
    }

    // Submit recipe (for now just log the values)
    console.log({ title, ingredients, steps });

    alert("Recipe submitted successfully! 🎉");

    // Clear fields after submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <textarea
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Example: Eggs, Milk, Sugar..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            className="w-full p-3 border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Step-by-step instructions..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
