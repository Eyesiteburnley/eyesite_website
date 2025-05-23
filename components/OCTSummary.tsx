import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const OCTSummary = () => {
  return (
    <section className="flexCenter flex-col pt-10">
      <div className="padding-container max-container w-full pb-10 lg:pb-24">
        <FontAwesomeIcon
          icon={faGlasses}
          style={{ width: "50px", height: "50px" }}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-80">
          we care for your eyecare
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            We provide OCT Scans
          </h2>
          <p className="regular-16 text-gray-50 xl:max-w-[540px]">
            An Optical Coherence Tomography (OCT) scan uses (non-invasive) light
            waves to produce a 3D scan of the layers of the retina. It allows
            the Optometrist to see the layers of the retina rather than just the
            surface. It helps the Optometrist to diagnose and manage eye
            conditions. It can be used as a baseline to monitor changes over
            time.
            <br />
            <br />
            <b>Does the OCT scan hurt?</b><br/> It is completely painless and nothing will
            touch your eye.
            <br />
            <br /> <b>What is the difference between a Retinal Camera and and OCT
            scan?</b> <br />
            <span className="mt-4">
              A Retinal Camera takes an image of the retina but just
              shows the surface only. Imagine the retina being a lasagne. The
              Retinal camera allows us to see the surface of the Lasagne.The Retinal Camera would produce a 2D image of this{" "}
            </span>
            <br />
            <br /> An OCT scan allows you to see the layers of the
            retina rather than just it&apos;s surface. So, imagine cutting the
            lasagne and being able to see the filling or the layers of it.
            The OCT would produce a 3D image of this.
          </p>
        </div>
      </div>
      <div className="flexCenter relative max lg:w-3/4 lg:bg-blue-80 lg:p-20  rounded-5xl flex-col lg:flex-col p-0">
        <Image
          src="/oct_scans_new.jpeg"
          alt="OCT Scan"
          width={600}
          height={500}
          className=" object-cover object-center 2xl:rounded-5xl rounded-2xl hidden lg:block"
        />
        <Image
          src="/oct_scans_new.jpeg"
          alt="OCT Scan"
          width={300}
          height={500}
          className=" object-cover object-center 2xl:rounded-5xl rounded-2xl lg:hidden"
        />

        <div className=" bg-white mt-10 py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md lg:hidden border-2 border-black">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">
                  The scan can help us detect
                </p>
              </div>
              <ul className="list-disc p-5">
                <li>Glaucoma</li>
                <li>Age related Macular Degeneration</li>
                <li>Detached Retina</li>
                <li>Macula Hole</li>
                <li>Optic nerve Inflammation</li>
                <li>Retinal Vein Occlusion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-10 hidden lg:flex">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">
                  The scan can help us detect
                </p>
              </div>
              <ul className="list-disc p-5">
                <li>Glaucoma</li>
                <li>Age related Macular Degeneration</li>
                <li>Detached Retina</li>
                <li>Macula Hole</li>
                <li>Optic nerve Inflammation</li>
                <li>Retinal Vein Occlusion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OCTSummary;
