"use client";

import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import PhoneInput from "./components/PhoneInput";
import SearchButton from "./components/SearchButton";
import TryExample from "./components/TryExampleButton";
import Hero from "./components/Hero";

export default function Home() {
  const phoneInputRef = useRef();

  const handleSearch = () => {
    const value = phoneInputRef.current?.getValue();
    console.log("Searching for:", value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="shadow-sm">
        <NavBar />
      </header>

      <Hero />

      <main className="relative top-20 bg-white text-black">
        <div className="mx-auto w-full max-w-xl px-5 flex flex-col gap-4">
          <PhoneInput ref={phoneInputRef} />

          <div className="flex items-center gap-3">
            <SearchButton handleSearch={handleSearch} />
            <TryExample />
          </div>
        </div>
      </main>
    </div>
  );
}
