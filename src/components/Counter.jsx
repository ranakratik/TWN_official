import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Counter = () => {
  // Example counts array (replace with your actual data)
  const counts = [
    { title: "Projects Completed", value: 7 },
    { title: "Happy Clients", value: 4 },
    { title: "Hours Worked", value: 2480 },
  ];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  // Counter animation logic
  const [currentCount, setCurrentCount] = useState(
    counts.map(() => 0) // Start all counts at 0
  );

  useEffect(() => {
    const intervalIds = counts.map((count, index) => {
      let speed = 10; // Default speed for normal counters

      // Make "Hours Worked" counter very fast
      if (count.title === "Hours Worked") {
        speed = 1; // Faster speed for Hours Worked
      }

      const interval = setInterval(() => {
        setCurrentCount((prevCount) => {
          const newCount = [...prevCount];
          if (newCount[index] < count.value) {
            newCount[index] += 1; // Increase the count gradually
          }
          return newCount;
        });
      }, speed); // Adjust the speed dynamically for each counter

      return interval;
    });

    // Cleanup intervals
    return () => intervalIds.forEach(clearInterval);
  }, [counts]);

  return (
    <div className="w-[90%] m-auto lg:flex-row flex-col justify-between items-center gap-28 py-10 relative">
      {/* Animated background with gradient fading from the center */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="bg-gradient-radial from-transparent via-purple-500 to-transparent w-full h-full opacity-40 animate-pulse"></div>
      </div>

      <section
        data-aos="zoom-in"
        className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black w-full lg:p-20 p-10 flex lg:flex-row flex-col justify-between items-center gap-20 rounded-3xl shadow-lg"
      >
        {counts.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up" // Animation for each counter
            className="flex flex-col justify-center items-center gap-4 transform transition-transform hover:scale-105 hover:bg-opacity-75 bg-gray-900 p-6 rounded-xl shadow-xl"
          >
            <h1 className="text-lime-500 font-bold text-6xl font-ubuntu drop-shadow-lg">
              {currentCount[index]} {/* Remove the + symbol */}
            </h1>
            <p className="text-white font-ubuntu text-lg font-semibold">
              {item.title}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Counter;
