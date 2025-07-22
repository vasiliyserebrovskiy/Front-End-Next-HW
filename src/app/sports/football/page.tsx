import React from "react";

export default function Football() {
  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h2 className="text-2xl font-bold text-center mb-4">Football Course</h2>

      <p className="text-lg text-shadow-white mb-4 text-center">
        An introduction to the world’s most popular sport — learn the essential
        skills and strategies to get started with football.
      </p>

      <ul className="list-disc list-inside text-gray-400 mb-4 text-left max-w-md mx-auto">
        <li>Basic techniques: passing, shooting, and ball control</li>
        <li>Dribbling and footwork</li>
        <li>Team play and positioning</li>
        <li>Understanding tactics and formations</li>
      </ul>

      <p className="text-md text-gray-300 text-center">
        <span className="font-semibold">Who is this for?</span> This course is
        perfect for beginners who want to build a strong foundation in football.
      </p>
    </div>
  );
}
