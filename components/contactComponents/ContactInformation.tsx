import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import BookingButton from "../BookingButton";
import Image from "next/image";

const ContactInformation = () => {
  return (
    <section>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-center flex-col lg:m-20 m-5">
          <h1 className="bold-52 lg:bold-88 h-50">Contact</h1>
          <h3 className="mb-5">We Have free Parking at our Location!</h3>
          <div className="flex flex-col lg:flex-row gap-5 bg-blue-80 p-10 rounded-5xl">
            <Image
              src="/Store_image.jpeg"
              alt="Store Image"
              width={600}
              height={600}
              className="rounded-xl"
            />
            <div>
              <h3 className="text-white bold-32 mb-2">Our Opening Times</h3>
              <p className="text-white regular-16 lg:regular-18">
                Monday: 9:00 AM - 5:30 PM
                <br />
                Tuesday: Closed
                <br />
                Wednesday: 9:00 AM - 5:30 PM
                <br />
                Thursday: 9:00 AM - 5:30 PM
                <br />
                Friday: 9:00 AM - 5:30 PM
                <br />
                Saturday: 9:00 AM - 5:30 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col sm:flex-row align-bottom">
          <div className="lg:w-1/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.123677539187!2d-2.233001623087173!3d53.80508294030057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b912c9276273b%3A0xe30c0c76654cc88!2sEyesite%20Opticians%20Burnley!5e0!3m2!1sen!2suk!4v1711570060695!5m2!1sen!2suk"
              width="100%"
              height="450"
              loading="lazy">
            </iframe>
          </div>
          <div className=" h-[450px] lg:w-1/3 bg-blue-80 flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <h2 className="bold-32 lg:bold-68 text-white">Contact Us</h2>
              {/* <div className="text-white flex items-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{
                    width: "40px",
                    height: "40px",
                    paddingRight: "15px",
                  }}
                />
                <p>07777 777 777</p>
              </div> */}
              <div className="text-white flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    width: "40px",
                    height: "40px",
                    paddingRight: "15px",
                  }}
                />
                <p>eyesiteburnley@gmail.com</p>
              </div>
              <div className="text-white flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    width: "40px",
                    height: "40px",
                    paddingRight: "15px",
                  }}
                />
                <p>01282 420 555</p>
              </div>
            </div>
          </div>
          <div className=" h-[450px] lg:w-1/3 bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="bold-32 lg:bold-68">Book an appointment</h2>
            <p className="text-center w-3/4 mb-5">
              If you would like to book an appointment, the button below will
              take you to our booking system.{" "}
            </p>
            <BookingButton
              type="button"
              title="Booking"
              icon=""
              variant="btn_blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
