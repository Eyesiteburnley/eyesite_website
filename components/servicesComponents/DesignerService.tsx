import React from "react";
import Image from "next/image";

const DesignerService = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="max-container padding-container flex flex-col-reverse gap-20  pb-10 md:gap-28 lg:py-20 xl:flex-row w-full">
        <div className="relative flex flex-1 items-center justify-center">
          <Image
            src="/oct_scanMedium.jpeg"
            alt="eyewear image"
            width={600}
            height={600}
            className="2xl:rounded-5xl"></Image>
        </div>
        <div className="relative flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center">
          <h1 className="bold-52 lg:bold-88">OCT eye scans</h1>
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

      <div className="max-container padding-container flex flex-col gap-20 xl:flex-row  w-full">
        <div className="relative flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center">
          <h1 className="bold-52 lg:bold-88">Designer eyewear</h1>
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
            src="/irritated_eye.jpg"
            alt="eyewear image"
            width={600}
            height={600}
            className="2xl:rounded-5xl"></Image>
        </div>
        <div className="relative flex flex-1 flex-col xl:w-1/2 items-center justify-center ">
          <h1 className="bold-52 lg:bold-88 text-center">MECs & CUEs</h1>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            The Minor Eye Conditions Service (MECS) provides assessment and
            treatment for people with recently occurring minor eye problems. It
            is an NHS service provided by accredited optometrists (also commonly
            called opticians).
            <br />
            If you are experiencing:
            <ul className="list-disc text-start align-middle">
              <li>Red eye or eyelids</li>
              <li>Dry, gritty, or uncomfortable eyes</li>
              <li>Eye irritation and inflammation</li>
              <li>A lot of recent discharge from the eye or watery eye</li>
              <li>Recently occurring flashes or floaters</li>
              <li>Painful eye</li>
              <li>Ingrowing lashes</li>
              <li>Recent and sudden loss of vision</li>
              <li>Foreign body in the eye</li>
            </ul>
            …you can arrange an appointment with an optometrist through the
            Minor Eye Conditions service.
          </p>
        </div>
      </div>

      <div className="max-container padding-container flex flex-col gap-20 xl:flex-row  w-full">
        <div className="relative flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center">
          <h1 className="bold-52 lg:bold-88">Comprehensive Eye Examination</h1>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Check the anterior surface of the eye, including the lids, lashes,
            cornea, conjunctiva, and the anterior chamber. Then, work our way to
            the back of the eye, assessing the health of the optic nerve,
            macula, blood vessels, and the entire retina. Afterward, we will
            determine your refractive error and advise whether spectacle
            correction is required. We will also advise if you are suitable for
            contact lenses.
          </p>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <Image
            src="/eye_exam Large.jpeg"
            alt="eyewear image"
            width={600}
            height={600}
            className="2xl:rounded-5xl"></Image>
        </div>
      </div>

      <div className="max-container padding-container flex flex-col-reverse gap-20  pb-10 md:gap-28 lg:py-20 xl:flex-row w-full">
        <div className="relative flex flex-1 items-center justify-center">
          <Image
            src="/contactlens2.jpeg"
            alt="eyewear image"
            width={600}
            height={600}
            className="2xl:rounded-5xl"></Image>
        </div>
        <div className="relative flex flex-1 flex-col xl:w-1/2 sm:text-center items-center justify-center">
          <h1 className="bold-52 lg:bold-88">Contact Lenses</h1>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            We will conduct a full anterior eye assessment. Using your spectacle
            prescription, we will also advise you on the best and most suitable
            contact lenses for your eyes. You will also be offered a free
            contact lens trial, during which you will be able to try sample
            lenses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignerService;
