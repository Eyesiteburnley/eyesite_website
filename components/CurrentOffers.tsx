import React from "react";
import { OFFERS } from "@/constants";
import { faGlasses,faKitMedical, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface offerProps {
  service: string;
  offerDetails: string;
  expiryDate:string
}

const OfferBox = ({ service, offerDetails, expiryDate}: offerProps) => {
  return (
    <div className="flex bg-white items-center p-10 rounded-5xl border-2 border-black m-2 justify-between">
      <div className="flex flex-col justify-between w-2/3">
        <h3 className="bold-32 lg:bold-32">{service}</h3>
        <p className="regular-16">{offerDetails}</p>
      </div>
      <div className="flex flex-col items-end w-1/3">
        <p className="self-end regular-16 text-gray-30">{expiryDate}</p>
      </div>
    </div>
  );
};

const CurrentOffers = () => {
  console.log(OFFERS[0]);
  return (
    <section className="w-full bg-blue-80 flex flex-col lg:flex-row">
      <div className="relative flex flex-1 flex-col pt-10 pl-5 pr-5 xl:w-1/2 lg:hidden">
          <h2 className="bold-52 lg:bold-88 text-white">
            Some of Our Current Offers
          </h2>
          <div>
            <p className="regular-16 text-white m-5 ml-0">
              What we currently have going on at Eyesite Opticians
            </p>
          </div>
        </div>
      <div className="max-container padding-container flex flex-col gap-20 py-10 sm:pb-10 md:gap-28 lg:py-20 xl:flex-row bg-blue-80">
      <div className="relative flex flex-col xl:w-1/2 overflow-y-scroll overflow-hidden h-[45vh]">
            <div>
                <ul>
                    {OFFERS.map((link) =>(
                        <OfferBox
                            key={link.service}
                            service={link.service}
                            offerDetails={link.offerDetails}
                            expiryDate={link.expiryDate}                  />
                    ))}
                </ul>
            </div>
        </div>
        <div className="relative flex flex-1 flex-col hidden lg:block xl:w-1/2">
          <h2 className="bold-52 lg:bold-88 text-white">
            Some of Our Current Offers
          </h2>
          <div>
            <p className="regular-16 text-white m-5 ml-0">
              What we currently have going on at Eyesite Opticians
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CurrentOffers;
