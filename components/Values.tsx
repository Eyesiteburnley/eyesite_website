import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faUser,
  faMicrochip,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import { FEATURES } from "@/constants";

const Values = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex">
        <div className="flex w-full flex-col">
          <div className="relative pl-0 p-3 lg:p-0">
            <FontAwesomeIcon
              icon={faGlasses}
              style={{ width: "50px", height: "50px" }}
              className="absolute left-[-50] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Core Values</h2>
          </div>
          <ul className="lg:mt-10 grid gap-10 md:grid-cols-3 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-blue-80">
        <Image src={icon} alt="value" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold:32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] ">
        {description}
      </p>
    </li>
  );
};

export default Values;
