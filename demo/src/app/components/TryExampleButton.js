"use client";
import React from "react";
import { BiSolidBot } from "react-icons/bi";

export default function SearchButton({ onClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "px-6 py-2.5 rounded-full font-medium shadow-sm transition-all duration-200",
        "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "inline-flex items-center gap-2"
      ].join(" ")}
      aria-label="Search"
    >
      <BiSolidBot  className="w-4 h-4" />
      <span>Try Example</span>
    </button>
  );
}
