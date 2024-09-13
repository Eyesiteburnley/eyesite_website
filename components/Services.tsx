import React from "react";
import { faArrowRight, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

interface serviceProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  readMore: string;
  serviceLink: string;
  font_icon: string;
}

const Service = ({
  backgroundImage,
  title,
  subtitle,
  readMore,
  serviceLink,
  font_icon,
}: serviceProps) => {
  return (
    <div
      className={`h-full  lg:min-w-[600px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-5xl lg:ml-10 2xl:rounded-5xl 2xl:ml-10 ml-2 rounded-5xl min-w-[300px]`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:py-10 ">
        <div className="flexCenter gap-4 bg-black p-3 rounded-lg bg-opacity-60">
          <div className="rounded-full bg-blue-80 p-4">
            <Image
              src={font_icon}
              alt="icon"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="bg-black bg-opacity-60 p-3 rounded-lg">
          <Link
            href={serviceLink}
            className="bold-16 md:bold-20 text-white flex flex-row flexCenter">
            {readMore}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ width: "20px", height: "20px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
const Services = () => {
  return (
    <section>
      <div className=" 2xl:max-container relative flex lg:flex-row flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 gap-10 items-center ">
        <div className="flex h-[40vh] w-2/3 items-center justify-start gap-8 overflow-auto lg:h-[400px] xl:h-[640px]">
          <h2 className="regular-24 md:regular-40 2xl:regular-64 capitalize">
            Scroll <strong>Right</strong> to see more{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px]"
            />
          </h2>
          <Service
            backgroundImage="bg-bg-img-8"
            title="Eye Test"
            subtitle="OCT Scan"
            readMore="Read More "
            serviceLink="./services"
            font_icon="/eye_exam_icon.jpeg"
          />
          <Service
            backgroundImage="bg-bg-img-3"
            title="Fully Comprehensive Eye Examination"
            subtitle=""
            readMore="Read More "
            serviceLink="./services"
            font_icon="/eye_exam_icon.jpeg"
          />
          <Service
            backgroundImage="bg-bg-img-6"
            title="Contact Lenses"
            subtitle=""
            readMore="Read More "
            serviceLink="./services"
            font_icon="/lens_icon.jpeg"
          />
          <Service
            backgroundImage="bg-bg-img-7"
            title="Minor Eye Condidtions"
            subtitle="(MECs/CUES)"
            readMore="Read More "
            serviceLink="./services"
            font_icon="/mecs_icon.jpeg"
          />
          <Service
            backgroundImage="bg-bg-img-4"
            title="Designer Eyewear"
            subtitle="Take a Look at some of the brands we stock"
            readMore="Read More  "
            serviceLink="./services"
            font_icon="/spectacles_icon.jpeg"
          />
        </div>
        {/* <div className="flexEnd mt-10 px-6 lg:-mt-7 lg:mr-6"> */}
        <div>
          <div className="bg-blue-80 p-8 lg:max-w-[500px] xl:max-w-[743px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              Here Are the <strong>Services</strong> that we provide
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Here is what we provide, if you would like to know more, click on
              the images to find out more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
