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
        speed = 3; // Faster speed for Hours Worked
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
    <div className="w-[90%] m-auto lg:flex-row flex-col justify-between items-center gap-28 py-10">
      <section
        data-aos="zoom-in"
        className="bg-gray-800 w-full lg:p-20 p-10 flex lg:flex-row flex-col justify-between items-center gap-20 rounded-3xl"
      >
        {counts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4"
          >
            <h1 className="text-lime-500 font-bold text-6xl font-ubuntu">
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
