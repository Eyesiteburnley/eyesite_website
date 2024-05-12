import React from "react";
import Image from "next/image";
import BookingButton from "./BookingButton";
import YouTube from "react-youtube";

const options = {
  height: "400",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Eyesite Opticians</h1>
        <h2 className="regular-18 text-gray-30">Established 1992</h2>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          <p>
              Welcome to Eyesite Opticians. We are a reputable well established
              business that has been servicing the community of Burnley for 30
              years.
          </p><br></br>
          <p>
            We provide the best eye care for our loyal patients, just have a
            look at our reviews! (Include link to Google reviews).
          </p>
          <br></br>{" "}
          <p>
            Here at Eyesite Opticians, we offer a full and comprehensive eye
            examinations, Spectacles, Contact Lenses and Spectacle accessories.
          </p>
          <br></br>{" "}
          <p>
            We have a wide variety of over 100&apos;s of frames in stock and on
            offer, with the vision to suit everyone&apos;s needs and styles, with
            brands such as Ted Baker, Ambri, Ferruci, Joia.
          </p>
        </p>
      </div>
      <div className="relative flex flex-1 items-center lg:items-start  ">
        <div className="relative hidden lg:flex">
          <iframe
            width="800"
            height="600"
            src="https://www.youtube.com/embed/djNOpVAwZk0?si=KtUxnAI9eSb7SYG8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className="relative lg:hidden">
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/djNOpVAwZk0?si=KtUxnAI9eSb7SYG8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
