"use client";

import React, { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import PhoneInput from "./components/PhoneInput";
import SearchButton from "./components/SearchButton";
import TryExample from "./components/TryExampleButton";
import Hero from "./components/Hero";
import PhoneLookupResult from "./components/PhoneLookupResult";
import { lookupPhoneNumber } from "../lib/lookupPhone";
import { mockPhoneData } from "../lib/mockPhoneData";


export default function Home() {
  const phoneInputRef = useRef();
  const [result, setResult] = useState(null); // store API response
  const [loading, setLoading] = useState(false);
  const [billingToken, setBillingToken] = useState(""); // <-- add this


  const handleSearch = async () => {
    const phonenumber = phoneInputRef.current?.getValue();
    
     if (!phonenumber) return alert("Enter a phone number!");
     if (!billingToken) return alert("Enter your TTC Billing Token! You can get it from the link above.");

    setLoading(true);
    try {
      const data = await lookupPhoneNumber(phonenumber, billingToken); // <-- pass token
      setResult(data); // send data to PhoneLookupResult
    } catch (error) {
      console.error(error);
      alert("Failed to fetch phone data.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };
      const handleTryExample = () => {
    setResult(mockPhoneData); // <-- show mock data
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

          <div className="w-full max-w-xl mx-auto mb-4 p-3 rounded-lg">
            <div className="w-full max-w-xl mx-auto mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
              <p className="text-sm text-yellow-800">
                 You need a <strong>Telecom Trust Center (TTC) Billing Token</strong> to perform a phone lookup.
                You can get one{" "}
                <a
                  href="https://app.telecomtrustcenter.com/user/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-yellow-900 hover:text-yellow-700"
                >
                  here
                </a>.
              </p>
              <input
                type="text"
                id="billingToken"
                value={billingToken}
                onChange={(e) => setBillingToken(e.target.value)}
                placeholder="Enter your TTC Billing Token"
                className="mt-2 w-full p-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
              />
            </div>


          <div className="flex items-center lg:relative left-52 gap-3">
            <SearchButton handleSearch={handleSearch} />
            <TryExample onClick={handleTryExample} />
          </div>

          {loading && <p className="mt-4 text-blue-500">Loading...</p>}

          {result && <PhoneLookupResult data={result} />}
        </div>
        </div>
      </main>
    </div>
  );
}
