"use client";
import React from "react";
import Image from "next/image";
import { SLIDER_IMAGES } from "@/constants";
import Description from "./Description";
import { useEffect, useState } from "react";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === SLIDER_IMAGES.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(SLIDER_IMAGES.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="grid place-items-center w-full mx-auto max-w-5xl shadow-2xl rounded-2xl mt-6">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl">
        {SLIDER_IMAGES.map((pic, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}>
            <Image
              src={pic.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
