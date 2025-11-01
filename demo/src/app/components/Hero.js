import React from 'react'

const Hero = () => {
  return (
  
      <div className="flex flex-col items-center justify-center px-5 py-5 relative top-20 text-center">
        <h1
          className="text-black font-bold text-3xl"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
        >
          Find Out Who&apos;s Calling
        </h1>
        <p
          className="text-black text-xl py-4"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
        >
          Enter a phone number to see caller details and verification status.
        </p>
      </div>
     
  )
}

export default Hero