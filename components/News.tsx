import React from "react";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <section>
      <div className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat lg:py-24 pb-5">
        <div className="max-container padding-container relative w-full flex">
          <div className=" flex w-full flex-col">
            <div className="relative">
              <h2 className="bold-40 lg:bold-64">Read About Us</h2>
              <h3 className="text-gray-30">
                See more about us in the Burnley express and a little about our
                work with healthier heroes
              </h3>
            </div>
            <div className="flex min-w-full justify-center items-center flex-col">
              <a
                target="_blank"
                href={
                  "https://www.burnleyexpress.net/business/burnley-based-eyesite-opticians-holds-open-day-to-celebrate-new-ownership-and-adopts-cic-healthier-heroes-4497161"
                }>
                <Image
                  src="/News large.jpeg"
                  alt="News Image"
                  width={600}
                  height={600}
                  className="mt-4"
                />
              </a>
              <a target="_blank" href="https://www.burnleyexpress.net/business/burnley-based-eyesite-opticians-holds-open-day-to-celebrate-new-ownership-and-adopts-cic-healthier-heroes-4497161">
                  <button className="bg-blue-80  text-white py-2 px-4 text-xl rounded-full mt-4">
                    Click Here
                  </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
