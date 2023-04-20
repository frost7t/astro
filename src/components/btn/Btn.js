import React from "react";

export default function Btn({ title, bgColor }) {
  return (
    <button
      className={`{${bgColor} text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow`}
    >
      {title}
    </button>
  );
}
