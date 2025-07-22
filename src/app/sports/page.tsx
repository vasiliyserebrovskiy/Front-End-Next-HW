import React from "react";

export default function Sports() {
  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h2 className="text-2xl font-bold text-center mb-6">Sports Courses</h2>

      <div className="flex flex-col gap-4 text-lg text-center">
        <div>
          <p className="text-yellow-500 font-semibold">Football</p>
          <p>
            Learn the fundamentals of football — from tactics to team
            coordination and ball control.
          </p>
        </div>

        <div>
          <p className="text-yellow-500 font-semibold">Tennis</p>
          <p>
            Master basic strokes, footwork, and game strategies with
            step-by-step guidance.
          </p>
        </div>

        <div>
          <p className="text-yellow-500 font-semibold">Swimming</p>
          <p>
            Improve your technique and confidence in the water, whether
            you&apos;re a beginner or advanced.
          </p>
        </div>
      </div>
    </div>
  );
}
