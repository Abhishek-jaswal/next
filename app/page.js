"use client";

import React, { useState } from "react";
import VitalsInput from "./components/VitalsInput";
import Report from "./components/Report";
import MealRecommendation from "./components/MealRecommendation";

export default function Home() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(70);
  const [dob, setDob] = useState("2000-01-01");
  const [gender, setGender] = useState(1);
  const [activity, setActivity] = useState(1);
  const [goal, setGoal] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  const calculateValues = () => {
    const birthYear = new Date(dob).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    const bmrValue = gender === 1
      ? (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)).toFixed(2)
      : (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)).toFixed(2);
    const activityFactor = activity === 3 ? 1.725 : activity === 2 ? 1.55 : 1.2;
    const tdeeValue = (bmrValue * activityFactor).toFixed(2);

    setBmi(bmiValue);
    setBmr(bmrValue);
    setTdee(tdeeValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-beige-100 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <VitalsInput 
          name={name} setName={setName} 
          height={height} setHeight={setHeight} 
          weight={weight} setWeight={setWeight} 
          dob={dob} setDob={setDob} 
          gender={gender} setGender={setGender} 
          activity={activity} setActivity={setActivity} 
          goal={goal} setGoal={setGoal} 
          calculateValues={calculateValues} 
        />
        <Report name={name} dob={dob} bmi={bmi} bmr={bmr} tdee={tdee} weight={weight} goal={goal} />
        <MealRecommendation tdee={tdee} />
      </div>
    </div>
  );
}
