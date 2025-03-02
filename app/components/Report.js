import React from "react";

export default function Report({ name, dob, bmi, bmr, tdee, weight, goal }) {
  return (
   <div id = "flex">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src="" alt="nice"/>
      <h2 className="text-lg font-bold mb-4">Your Report & Solution</h2>

      {bmi && (
        <>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Date of Birth:</strong> {dob}</p>
          <p><strong>Current Weight:</strong> {weight} kg</p>
          <p><strong>BMI:</strong> {bmi}</p>
          <p><strong>BMR:</strong> {bmr} kcal/day</p>
          <p><strong>TDEE:</strong> {tdee} kcal/day</p>
          <p><strong>Goal:</strong> {goal}</p>
        </>
      )}
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg"></div>
    </div>
  );
}
