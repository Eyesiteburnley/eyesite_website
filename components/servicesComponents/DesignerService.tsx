import React from "react";
import Image from "next/image";

const DesignerService = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="max-container padding-container flex flex-col gap-20 xl:flex-row  w-full">
        <div className="relative flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center">
          <h1 className="bold-52 lg:bold-88">We Offer Designer eyewear</h1>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            At our optician practice, we take pride in offering a comprehensive
            range of services to meet all your vision needs. Our expert team
            provides thorough eye examinations using the latest technology,
            ensuring precise and personalized care. Additionally, we offer a
            curated selection of designer eyewear, featuring renowned brands
            such as Ted Baker, Ambri, Ferruci, and Joia. Whether you&apos;re
            seeking stylish frames or high-quality lenses, our collection caters
            to diverse tastes and preferences, combining fashion with
            functionality to enhance your vision and complement your unique
            style.
          </p>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <Image
            src="/d-eyewear Large.jpeg"
            alt="eyewear image"
            width={600}
            height={600}
            className="2xl:rounded-5xl"></Image>
        </div>
      </div>

      <div className="max-container padding-container flex flex-col-reverse gap-20  pb-10 md:gap-28 lg:py-20 xl:flex-row w-full">
        <div className="relative flex flex-1 items-center justify-center">
          <Image
            src="/machine Large.jpeg"
            alt="eyewear image"
            width={600}
            height={600}
            className="2xl:rounded-5xl"></Image>
        </div>
        <div className="relative flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center">
          <h1 className="bold-52 lg:bold-88">We Offer OCT eye scans</h1>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            At our optician practice, we are committed to providing exceptional
            eye care services tailored to your needs. We offer advanced Optical
            Coherence Tomography (OCT) scans, utilizing cutting-edge technology
            to capture detailed images of the retina. This allows for early
            detection and management of various eye conditions such as glaucoma,
            age-related macular degeneration, and diabetic retinopathy. Our OCT
            scans ensure precise and thorough evaluations, helping us to
            safeguard your vision and maintain optimal eye health. Trust us to
            deliver comprehensive care with the latest diagnostic tools for your
            peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignerService;
