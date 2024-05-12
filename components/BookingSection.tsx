import React from "react";

const BookingSection = () => {
  return (
    <section className="w-full bg-blue-80 flex flex-col lg:flex-row">
      <div className="max-container padding-container flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 xl:flex-row bg-blue-80">
        <div className="relative flex flex-1 flex-col xl:w-1/2">
          <h2 className="bold-52 lg:bold-88 text-white">Book An Appointment</h2>
          <div>
            <p className="regular-16 text-white m-5 ml-0">
              Or you can Find us here, We have <b>Free Parking</b>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.1238555633036!2d-2.233001622911428!3d53.80507977242592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b912c9276273b%3A0xe30c0c76654cc88!2sEyesite%20Opticians%20Burnley!5e0!3m2!1sen!2suk!4v1715518983630!5m2!1sen!2suk"
              width="400"
              height="300"
              className="rounded-2xl"
              loading="lazy"></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.1238555633036!2d-2.233001622911428!3d53.80507977242592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b912c9276273b%3A0xe30c0c76654cc88!2sEyesite%20Opticians%20Burnley!5e0!3m2!1sen!2suk!4v1715518983630!5m2!1sen!2suk"
              width="350"
              height="300"
              className="rounded-2xl"
              loading="lazy"></iframe>
          </div>
        </div>
        <div className="relative flex flex-1 flex-col xl:w-1/2">
          <iframe
            id="myIframe"
            height="600"
            className="rounded-2xl"
            src="https://blinkoms.co.uk/blinkdiary/eyesite/booking"></iframe>
          <iframe
            id="myIframe"
            height="600"
            width="350"
            className="rounded-2xl"
            src="https://blinkoms.co.uk/blinkdiary/eyesite/booking"></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
