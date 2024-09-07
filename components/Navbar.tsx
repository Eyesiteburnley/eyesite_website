"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BookingButton from "./BookingButton";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full bg-blue-80 px-4 lg:px-8 py-5 relative z-30">
      <Link className="ml-4" href="./">
        <Image
          className=""
          src="/white_logo.png"
          alt="logo"
          width={150}
          height={750}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className=" lg:flex hidden">
        <BookingButton
          type="button"
          title="Book Appointment"
          icon=""
          variant="btn_white"
        />
      </div>

      <div onClick={handleNav} className="cursor-pointer lg:hidden">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden text-white"
        />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top=0 p-10 ease-in duration-500"
        }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <FontAwesomeIcon
              icon={faXmark}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
        </div>
        <div className="py-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="py-4 cursor-pointer">
                <li onClick={() => setMenuOpen(false)}>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
