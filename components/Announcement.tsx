import Image from "next/image";
import Link from "next/link";
import React from "react";

const Announcement = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 lg:flex-row">

        {/* Left Text Block */}
        <div className="flex flex-1 flex-col lg:w-1/2">
          <h2 className="bold-52 lg:bold-88">We Have an Announcement!</h2>
          <div className="flex items-center flex-col">
            <p className="lg:hidden">
              M Anderson on Lyndhurst road has closed due to retirement after 40 yrs.
              <br /><br />
              We at Eyesite Opticians are proud and happy to announce that Mr Anderson has chosen us to take over the care of all his patients.
              <br /><br />
              We look forward to welcoming you all and will endeavour to keep to the high standards Mr Anderson kept.
              <br /><br />
              We wish Mr Anderson a happy Retirement.
              <br /><br />
              We will contact you when you are due your appointment. If you would like to make an appointment please book using the link on the website or by calling us.
            </p>
            <div className="hidden lg:block">
              <p>
                M Anderson on Lyndhurst road has closed due to retirement after 40 yrs.
                <br /><br />
                We at Eyesite Opticians are proud and happy to announce that Mr Anderson has chosen us to take over the care of all his patients.
                <br /><br />
                We look forward to welcoming you all and will endeavour to keep to the high standards Mr Anderson kept.
                <br /><br />
                We wish Mr Anderson a happy Retirement.
                <br /><br />
                We will contact you when you are due your appointment. If you would like to make an appointment please book using the link on the website or by calling us.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="flex flex-1 flex-col items-center lg:w-1/2">
          {/* Desktop Image */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <Image
              src="/announcement_store.jpeg"
              width={600}
              height={600}
              alt="store picture"
              className="rounded-2xl mb-10 w-full max-w-md"
            />
            <p>
              Please Find More Information{" "}
              <Link href="/announcement_details.jpeg" className="text-blue-80 font-semibold">
                here
              </Link>
            </p>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden flex flex-col items-center justify-center">
            <Image
              src="/announcement_store.jpeg"
              width={400}
              height={400}
              alt="store picture"
              className="rounded-2xl mb-10 w-full max-w-xs"
            />
            <p>
              Please Find More Information{" "}
              <Link href="/announcement_details.jpeg" className="text-blue-80 font-semibold">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
