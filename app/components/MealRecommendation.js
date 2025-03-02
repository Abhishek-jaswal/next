import React from "react";

export default function MealRecommendation() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
      <h2 className="text-lg font-bold mb-4">Have No Time to Prepare Food?</h2>
      <p className="text-sm text-gray-600 mb-4">Try Sari Food from MountainEat Farms</p>

      {/* Meal Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MealCard title="Sari Protein Shake" calories="200" />
        <MealCard title="Sari Vegan Shake" calories="180" />
        <MealCard title="Sari Low-Cal Shake" calories="150" />
        <MealCard title="Sari Energy Boost" calories="250" />
      </div>
    </div>
  );
}

// Reusable Meal Card Component
function MealCard({ title, calories }) {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-gray-700">Cal: {calories} Cal</p>
      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600 transition">
        Subscribe
      </button>
    </div>
  );
}
