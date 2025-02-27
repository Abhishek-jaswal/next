import React from "react";

export default function VitalsInput({
  name, setName,
  height, setHeight,
  weight, setWeight,
  dob, setDob,
  gender, setGender,
  activity, setActivity,
  goal, setGoal,
  calculateValues
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
      <h2 className="text-lg font-bold mb-4">Know Your Vitals</h2>

      {/* Name Input */}
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 border rounded shadow-sm"
      />

      {/* Height Input */}
      <label className="block mt-4">Height: {height} cm</label>
      <input
        type="range"
        min="100" max="250"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full accent-green-500"
      />

      {/* Weight Input */}
      <label className="block mt-4">Weight: {weight} kg</label>
      <input
        type="range"
        min="30" max="200"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full accent-green-500"
      />

      {/* DOB Input (Date Picker) */}
      <label className="block mt-4">Date of Birth:</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="w-full p-2 border rounded shadow-sm"
      />

      {/* Gender Input (Range Slider) */}
      <label className="block mt-4">Gender:</label>
      <input
        type="range"
        min="1" max="3"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="w-full accent-green-500"
      />
      <p>{gender === "1" ? "Male" : gender === "2" ? "Female" : "Other"}</p>

      {/* Activity Level Input */}
      <label className="block mt-4">Activity Level:</label>
      <input
        type="range"
        min="1" max="3"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="w-full accent-green-500"
      />
      <p>{activity === "1" ? "Low" : activity === "2" ? "Moderate" : "High"}</p>

      {/* Goal Input */}
      <label className="block mt-4">Your Goal:</label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="E.g., Lose weight, Gain muscle"
        className="w-full p-2 border rounded shadow-sm"
      />

      {/* Check Button */}
      <button onClick={calculateValues} className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg hover:bg-green-600 transition">
        Check
      </button>
    </div>
  );
}
