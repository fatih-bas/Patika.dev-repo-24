import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restart } from "../redux/cardSlice";

const Alert = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.cards.score);

  return (
    <div
      className="p-2 text-white bg-emerald-800 rounded-lg mt-12 mb-6"
      role="alert"
    >
      <div className="flex items-center">
        <h3 className="text-lg font-medium text-white  ml-3">
          Congratulations! <span className="ml-24">Your Score: {score}</span>
        </h3>
        <button
          type="button"
          onClick={() => dispatch(restart())}
          className="text-white bg-slate-500  hover:bg-slate-900 hover:text-white ml-auto focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 mr-2 text-center inline-flex items-center"
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Alert;
