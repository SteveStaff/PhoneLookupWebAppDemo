"use client";

import React from "react";

export default function PhoneLookupResult({ data }) {
  if (!data) return null; // nothing to show

  return (
    <div className="max-w-xl mx-auto mt-5 p-5 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-3">Phone Lookup Result</h2>
      <pre className="whitespace-pre-wrap break-words text-sm">
        {typeof data === "object" ? JSON.stringify(data, null, 2) : String(data)}
      </pre>
    </div>
  );
}
