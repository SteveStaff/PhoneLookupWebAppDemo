"use client"

import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { FaSearch } from "react-icons/fa";

const PhoneInput = forwardRef((props, ref) => {
  const inputRef = useRef();

    // Let parent read this input’s value
  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current?.value || "",
  }));

  
  return (
    <div className="w-full max-w-md mx-auto border-2 border-gray-300 rounded-2xl p-3">
      <form className="flex items-center gap-3" onSubmit={(e) => e.preventDefault()}>
        <FaSearch size={22} className="text-gray-600" />
        <input
          type="text"
          ref={inputRef}
          placeholder="Search phone number..."
          className="w-full text-black text-xl p-2 border-0 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id='userNameInput'
        />
      </form>
    </div>
  );
});

export default PhoneInput;
