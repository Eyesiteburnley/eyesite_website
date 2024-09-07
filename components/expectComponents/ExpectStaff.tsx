import React from "react";
import { STAFF_INFO } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface staffCardProps {
  name: string;
  description: string;
  image: string;
}

const StaffCard = ({ name, description, image }: staffCardProps) => {
  return (
    <div className="bg-black p-10 flex justify-center items-center bg-opacity-10 rounded-2xl">
      <div className="h-[500px] lg:w-[430px] md:w-[300px] flex flex-col justify-between align-middle items-center ">
        <div>
          <p>
            <span className="bold-20 lg:bold-32">{name}</span> {description}
          </p>
        </div>
        <div>
          {/* Responsive width: 250px on mobile, 300px on larger screens */}
          <div className="w-[250px] md:w-[300px] h-[400px] relative">
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpectStaff = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      {/* <Image
        src={"/staff-img Large.jpeg"}
        alt="Staff"
        width={800}
        height={800}
        className="rounded-5xl"
      /> */}
      <div className="max-container padding-container relative w-full p-8 flex pt-10">
        <div className=" flex w-full flex-col">
          <div className="relative p-6 pb-0 lg:p-0 ">
            <FontAwesomeIcon
              icon={faUser}
              style={{ width: "50px", height: "50px" }}
              className="absolute left-[-50] top-[-20px] lg:top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Meet Our Staff</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 lg:grid-cols-3 pb-20">
            {STAFF_INFO.map((link) => (
              <StaffCard
                key={link.name}
                name={link.name}
                description={link.desc}
                image={link.img}
              />
            ))}
            {/* <li><span className="bold-20 lg:bold-32">Janet</span> is our Qualified Dispensing Optician for 23 years. She has been in the profession for 40 years.</li>
            <li><span className="bold-20 lg:bold-32">Amir</span> is our Optometrist who has been qualified for 16 years. He has been in the profession for 20 years.</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpectStaff;
