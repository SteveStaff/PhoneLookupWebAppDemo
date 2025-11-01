"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchButton({ handleSearch }) {
  

  return (
    <button
      type="button"
      onClick={handleSearch}
 
      className={[
        "px-6 py-2.5 rounded-full font-medium shadow-sm transition-all duration-200",
        "bg-blue-600 text-white hover:bg-blue-800 active:bg-blue-700",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "inline-flex items-center gap-2" 
      ].join(" ")}
      aria-label="Search"
    >
      <FaSearch className="w-4 h-4" />
      <span>Search</span>
    </button>
  );
}
