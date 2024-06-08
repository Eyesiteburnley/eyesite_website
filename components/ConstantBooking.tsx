"use client";
import React from "react";
import { useState, useEffect } from "react";
import BookingButton from "./BookingButton";

const ConstantBooking = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <div
      className={`fixed bottom-4 z-10 opacity-100 right-4 transition-opacity duration-200`}>
      <BookingButton
        type={"button"}
        title={"Book An Appointment"}
        variant={"btn_constant"}
      />
    </div>
  );
};

export default ConstantBooking;
