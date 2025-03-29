import React from "react";

export default function ProgressEstimation({ daysToGoal }) {
  return (
    <div className="mt-6 p-6 bg-white  rounded-lg text-center">
      <h2 className="text-xl font-semibold text-gray-800">Estimated Time to Reach Goal</h2>
      {daysToGoal ? (
        <p className="text-lg text-green-600 font-bold mt-2">{daysToGoal} Days</p>
      ) : (
        <p className="text-gray-500 mt-2">Enter your details to see progress estimation</p>
      )}
    </div>
  );
}
