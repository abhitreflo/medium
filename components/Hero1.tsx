import React from 'react'

function Hero1() {
  return (
    <div className="flex items-center mx-auto space-x-5 bg-blue-50 p-5 ">
      <div className="space-y-4 ">
        <h1 className="max-w-xl font-serif  min-h-20 text-3xl md:text-6xl md:h-full">
          <span className="decoration-5 bg-yellow-300 underline decoration-red-500">
            Medium
          </span>{' '}
          is a place to read, write and connect
        </h1>
        <h2 className="max-w-xl font-semibold">
          Discover stories, thinking, and expertise from writers on any topic
        </h2>
      </div>
      <img className="hidden md:inline-flex h-20 lg:h-40 " src="https://cdn.worldvectorlogo.com/logos/medium-1.svg" alt="logo2" />
    </div>
  )
}

export default Hero1
