'use client';

import { useState } from 'react';

export default function FitnessTimeline() {
  const [progress, setProgress] = useState(1);

  const milestones = [
    { day: 'Day 1', weight: '78Kg', status: 'Not Healthy (1 among 85% in the world)', image: "/Images/training.png" },
    { day: 'Day 90', weight: '69Kg', status: 'Not Healthy (1 among 85% in the world)', image: "/Images/training.png"},
    { day: 'Day 180', weight: '58Kg', status: 'You are Super Fit ( Top 1% in the world)', image:"/Images/training.png" },
  ];

  return (
    <div className="flex flex-col items-center p-4 md:flex-row md:justify-between  mx-auto bg-white rounded-lg shadow-md space-y-6 md:space-y-0 bg-opacity-40 ">
      {/* Left Side: Tips and Activities */}
      <div className="space-y-6   max-w-7xl">
        <div className="flex items-center space-x-3">
          <img src="/Images/training.png" alt="Water intake" className="w-12 h-12" />
          <p className= "text-gray-700"><b></b><span className="text-blue-700">Take 3ltr water intake a day</span><br />Learn how to drink water in 30 sec</p>
        </div>
        <div className="flex items-center space-x-3">
          <img src="/Images/training.png"alt="Workout" className="w-12 h-12" />
          <p className="text-gray-700"><span className="font-bold text-red-400">Workout for 1 hour</span><br />How workout improves metabolism?</p>
        </div>
       
          <div  className="flex items-center space-x-3">
            <img src="/Images/training.png" alt="Fruits and Vegetables" className="w-12 h-12" />
            <p className="text-gray-700"><span className="font-bold text-green-500">Eat more fruits & Vegetables</span><br />How to cook food for weight loss?</p>
          </div>
        
      </div>

      {/* Center: Vertical Progress Tracker */}
      <div className="relative flex flex-col items-center">
        <div className="w-1 bg-gray-300 h-10 rounded-md absolute" />
        <input
          type="range"
          min="1"
          max="3"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full accent-green-500   h-60 rotate-180 z-4 cursor-pointer"
          style={{ writingMode: 'vertical-lr' }}
        />
      </div>

      {/* Right Side: Milestones */}
      <div className="text-center md:w-1/3">
        {milestones.map((milestone, index) => (
          <div key={index} className={`${progress === index + 1 ? 'block' : 'hidden'} space-y-2` }>
            <img src={milestone.image} alt={milestone.day} className="mx-auto w-24 h-24" />
            <p className="font-bold text-lg">{milestone.day}</p>
            <p className="text-gray-700">Weight: {milestone.weight}</p>
            <p className="text-green-600">{milestone.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
