import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";

function Delivery() {
  const [progress, setProgress] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let interval;
    const timer = (index) => {
      if (index >= progress.length) return;
      let number = 0;
      interval = setInterval(() => {
        number += 10;
        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = Math.min(number, 100);
          return newProgress;
        });
        if (number >= 100) {
          clearInterval(interval);
          timer(index + 1);
        }
      }, 300);
    };

    timer(0);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Your Order Has Been Placed
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          <div className="flex flex-col items-center">
            <Progress value={progress[0]} className="w-full" />
            <p className="mt-2 text-center font-medium">
              {progress[0] !== 100 || progress[0] === 100
                ? "Placing Order"
                : ""}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Progress value={progress[1]} className="w-full" />
            <p className="mt-2 text-center font-medium">
              {progress[1] !== 100 || progress[1] === 100
                ? "Preparing Order"
                : ""}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Progress value={progress[2]} className="w-full" />
            <p className="mt-2 text-center font-medium">
              {progress[2] !== 100 || progress[2] === 100
                ? "Dispatching Order"
                : ""}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Progress value={progress[3]} className="w-full" />
            <p className="mt-2 text-center font-medium">
              {progress[3] !== 100 || progress[3] === 100
                ? "Delivering Order"
                : ""}
            </p>
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-10 text-center">
          Order Again SOON!
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default Delivery;
