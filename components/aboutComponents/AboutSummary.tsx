import React from "react";

const AboutSummary = () => {
  return (
    <section>
      <div className="flex flex-col items-center w-screen bg-blue-80 mb-10 p-10">
        <h1 className="bold-52 lg:bold-88 text-white ">What we do</h1>
        <div className="regular-16 mt-6 text-center w-2/3 text-white justify-between flex items-center flex-col ">
          <p className="regular-16 mt-3 xl:max-w-[520px]">
            We provide the best eye care for our loyal patients, just have a
            look at our reviews!{" "}
            <a
              className="text-blue-30"
              href="https://maps.app.goo.gl/z5iaLfBD3XGD4kqz8">
              Click Here{" "}
            </a>
            
          </p>

          <p className="regular-16 mt-3 xl:max-w-[520px]">
            Here at Eyesite Opticians, we offer a full and comprehensive eye
            examinations, Spectacles, Contact Lenses and Spectacle accessories.
          </p>

          <p className="regular-16 mt-3 xl:max-w-[520px]">
            We have a wide variety of over 100&apos;s of frames in stock and on
            offer, with the vision to suit everyone&apos;s needs and styles,
            with brands such as Ted Baker, Ambri, Ferruci, Joia just to name a
            few.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
