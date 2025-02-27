import React from "react";

export default function MealRecommendation({ tdee }) {
  if (!tdee) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Meal Recommendations</h2>
        <p className="text-gray-500">Enter your details to see recommendations.</p>
      </div>
    );
  }

  const meals = [
    { name: "Oatmeal with Berries", calories: 300 },
    { name: "Grilled Chicken Salad", calories: 400 },
    { name: "Quinoa with Vegetables", calories: 350 },
    { name: "Protein Shake", calories: 200 },
    { name: "Almond Butter Toast", calories: 250 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Meal Recommendations</h2>

      <p><strong>Daily Caloric Needs:</strong> {tdee} kcal</p>

      <div className="grid gap-4 mt-4">
        {meals.map((meal, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded">
            <p><strong>{meal.name}</strong></p>
            <p>Calories: {meal.calories} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
}
