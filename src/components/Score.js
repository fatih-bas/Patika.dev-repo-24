import React from "react";
import { useSelector } from "react-redux";

const Score = () => {
  const score = useSelector((state) => state.cards.score);
  if (score === 30) {
    window.scrollTo(0, 0);
  }
  return (
    <div className="container mt-12 mb-6">
      <div className="flex my-auto mx-auto">
        <div className="mx-auto px-4 py-2 text-white bg-slate-800 rounded-lg my-auto text-lg font-medium">
          Score: <span className="ml-3">{score}</span>
        </div>
      </div>
    </div>
  );
};

export default Score;
