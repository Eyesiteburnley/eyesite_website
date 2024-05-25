import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faUser } from "@fortawesome/free-solid-svg-icons";

const ExpectStaff = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <Image
        src={"/staff-img Large.jpeg"}
        alt="Staff"
        width={800}
        height={800}
        className="rounded-5xl"
      />
      <div className="max-container padding-container relative w-full p-8 flex pt-10">
        <div className=" flex w-full flex-col">
          <div className="relative p-6 pb-0 lg:p-0">
            <FontAwesomeIcon
              icon={faUser}
              style={{ width: "50px", height: "50px" }}
              className="absolute left-[-50] top-[-20px] lg:top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Meet Our Staff</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:mg-20 lg:gap-20 pb-20">
            <li><span className="bold-20 lg:bold-32">Christine</span> has been Practice Manager since the doors first opened. She has been in the profession for 33 years. </li>
            <li><span className="bold-20 lg:bold-32">Amir</span> is our Optometrist who has been qualified for 16 years. He has been in the profession for 20 years.</li>
            <li><span className="bold-20 lg:bold-32">Janet</span> is our Qualified Dispensing Optician for 23 years. She has been in the profession for 40 years.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpectStaff;
