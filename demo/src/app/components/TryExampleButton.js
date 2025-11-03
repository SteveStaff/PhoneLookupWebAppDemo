import React from "react";

export default function TryExample({ onClick }) {
    return (
    <button
      onClick={onClick}
      className={[
        "px-6 py-2.5 rounded-full font-medium shadow-sm transition-all duration-200",
        "bg-gray-600 text-white hover:bg-gray-800 active:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "inline-flex items-center gap-2",
      ].join(" ")}
    >
      Try Example
    </button>
  );
}