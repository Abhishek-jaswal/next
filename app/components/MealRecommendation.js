import React from "react";

export default function MealRecommendation() {
  return (
    <div className="flex flex-col md:flex-row gap-4 ">
    <div className="bg-white  bg-opacity-20  rounded-lg    " >
      <h2 className="text-lg font-bold ">Have No Time to Prepare Food?</h2>
      <p className="text-sm text-gray-600 ">Try Sari Food from MountainEat Farms</p>

      {/* Meal Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-2">
        <MealCard title="Sari Protein Shake" calories="200" />
        <MealCard title="Sari Vegan Shake" calories="180" />
        <MealCard title="Sari Low-Cal Shake" calories="150" />
        <MealCard title="Sari Energy Boost" calories="250" />
      </div>
    </div>
    <div className="bg-white p-2 bg-opacity-20 rounded-lg    max-w-xl" >
    <img src="/Images/training.png" alt="food" width={80} height={100} className="place-self-center" />
      <h2 className=" font-bold mt-4">Sari is your trusted family member, Because <br></br>a healthy family is Heaven,and Sari keeps <br></br> it that way.</h2>
     
      <h1 className="text-lg font-bold mt-4">
        --MountainKid
      </h1>
     

      {/* Meal Recommendations */}
     
    </div>
    </div>
  );
}

// Reusable Meal Card Component
function MealCard({ title, calories }) {
  return (
    <div className="p-2 rounded-lg shadow-md text-center ">
    <img src="/Images/shaker.png" alt="food" width={60} height={80} className="place-self-center" />
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-gray-700">Cal: {calories} Cal</p>
      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600 transition">
        Subscribe
      </button>
    </div>
    
  );
}
