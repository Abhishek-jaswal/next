"use client";

import React, { useState } from "react";
import VitalsInput from "./components/VitalsInput";
import MealRecommendation from "./components/MealRecommendation";
import "./globals.css";
import Sunnry from "./components/Sunnry";

export default function Home() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(70);
  const [dob, setDob] = useState("");
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
    setDob(`${age} years`);
  };

  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-beige-100 ">
      {/* Parent container: Flexbox layout */} <h2 className="text-lg font-bold mb-4 max-w-sm text-center pt-4 text-gray-700">Sari Vitals</h2>
      <div className=" flex flex-col md:flex-row  items-center  pl-8 pr-8 gap-4">
    
        {/* Left Container (VitalsInput) */}
        <div className="flex-1 bg-white p-8 rounded-3xl bg-white bg-opacity-30  shadow-md  ">
        
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
        </div>

        {/* Right Container (Splitting into tgap-4wo sections) */}
        <div className="rounded-3xl bg-white bg-opacity-30  shadow-md  p-4">
        <h2 className="text-lg font-bold mb-4 text-center text-gray-700 ">Your Report & Resolution</h2>


          {/* Report Section */}
        
            <Sunnry name={name} dob={dob} bmi={bmi} bmr={bmr} tdee={tdee} weight={weight} goal={goal} />
        
            
          {/* Meal Recommendation Section */}
        
            <MealRecommendation  />
          
        </div>
      
      </div>
      </div>
      </>
  );
}
