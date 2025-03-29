import React from "react";
import FitnessTimeline from "./FitnessTimeline";



export default function Sunnry({ name, dob, bmi, bmr, tdee, weight, goal }) {
  return (
   <div className = "flex flex-col md:flex-row gap-2" >
    <div className="bg-white p-6 rounded-lg  w-50 max-w-xs max-w-sm bg-opacity-40 " id="sunnry">
    <label className="flex mb-1   place-self-center">
      <img src="/Images/training.png" alt="nice" className="h-16 w-16"/>
      <label className="mt-4 ml-2 gap-2"> {name}<br></br>{dob}</label>
      </label>
        <>
          <p className="mt-2"><b>Don't worry {name},I will help you. <br></br>First let me show you where things are wrong</b> </p>
          <p className="mt-2"><strong className="mr-2">Your BMI:</strong> {bmi} <br></br><span>learn BMI in 30 sec</span></p>
          <p className="mt-2"><strong className="mr-2">Your BMR:</strong> {bmr} kcal/day <br></br><span>learn BMR in 30 sec</span></p>
          <p className="mt-2"><strong className="mr-2">Your TDEE:</strong> {tdee} kcal/day <br></br><span>learn TDEE in 30 sec</span></p>
        </>

    </div>
    
        <FitnessTimeline />
    
    </div>
  );
}
